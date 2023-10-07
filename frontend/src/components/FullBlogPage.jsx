import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
// import reactbg from '../assets/Images/react.png';
import Cookies from 'js-cookie';
import { ArrowLeft } from 'feather-icons-react';
import Sidebar from './Sidebar';
const FullBlogPage = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState('');
    const [fullBlogContent, setFullBlogContent] = useState('');
    const [newContent, setNewContent] = useState('');
    const [cover, setCover] = useState('');
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);


    useEffect(() => {
        const fetchBlogDetail = async () => {
            try {
                const new_access_token = Cookies.get('new_access_token');

                const response = await fetch(`http://127.0.0.1:8000/${title}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${new_access_token}`,
                    },
                });

                if (response.status === 401) {
                    await refreshAccessToken();
                    fetchBlogDetail(); // Retry fetching blog detail after token refresh
                } else if (!response.ok) {
                    throw new Error('Failed to fetch blog detail');
                } else {
                    const data = await response.json();
                    setAuthor(data.user);
                    setFullBlogContent(data.content);
                    setLikes(data.likes_count);
                    setComments(data.comments);
                    setCover(data.cover_image)
                }
            } catch (error) {
                //pass
            }
        };

        fetchBlogDetail();
    }, [title]);

    const refreshAccessToken = async () => {
        try {
            const refreshToken = Cookies.get('new_refresh_token');

            const response = await fetch('http://127.0.0.1:8000/api/users/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refresh_token: refreshToken }),
            });

            if (!response.ok) {
                throw new Error('Failed to refresh access token');
            }

            const data = await response.json();
            setAuthor(data.author);
            setFullBlogContent(data.content);
            setLikes(data.likes_count);
            setComments(data.comments);
            Cookies.set('new_access_token', data.access_token);
        } catch (error) {
            // console.error(error);
        }
    };

    const handleLike = async () => {
        try {
            const new_access_token = Cookies.get('new_access_token');

            const response = await fetch(`http://127.0.0.1:8000/${title}/likes/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${new_access_token}`,
                },
            });

            if (response.status === 401) {
                await refreshAccessToken();
                handleLike(); // Retry liking after token refresh
            } else if (!response.ok) {
                throw new Error('Failed to like the blog');
            } else {
                const data = await response.json();
                setLikes(data.likes_count);
            }
        } catch (error) {
            // console.error(error);
        }
    };

    const handleComment = async (e) => {
        e.preventDefault();

        try {
            const new_access_token = Cookies.get('new_access_token');

            const response = await fetch(`http://127.0.0.1:8000/${title}/comment/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${new_access_token}`,
                },
                body: JSON.stringify({ content: newContent }),
            });

            if (response.status === 401) {
                await refreshAccessToken();
                handleComment(e); // Retry commenting after token refresh
            } else if (!response.ok) {
                throw new Error('Failed to add comment');
            } else {
                const data = await response.json();

                setComments([...comments, data]);
                setNewContent(''); // Clear the comment input
            }
        } catch (error) {
            // console.error(error);
        }
    };

    const goBack = () => {
        navigate(-1);
    };


    return (
        <div>
            <div className='float-left'>
                <Sidebar />
            </div>
            <div className="p-4 sm:ml-64 ">
                <div className="p-4  mt-16 text-white">
                    <div className="container mx-auto py-12 px-4 ">
                        <div className="max-w-5xl mx-auto bg-primary rounded-lg shadow-lg p-6">
                            <button
                                onClick={goBack}
                                className=" text-white py-2 rounded mb-3 flex items-center"
                                style={{ color: 'white' }} // Set the color to white
                            >
                                <ArrowLeft className="mr-2" />
                            </button>
                            <h1 className="text-3xl text-center text-white font-bold my-6">{title.toUpperCase().replace(/-/g, ' ')}</h1>
                            <div className='w-full'>
                                <img src={`http://127.0.0.1:8000/${cover}`} alt="Blog" className="mb-4 h-[30rem] rounded-lg w-full" />
                            </div>

                            <h3 className="text-lg text-white mb-4">Published by <span className='text-blue font-semibold'>@{author}</span></h3>
                            <p className="text-base leading-7 mb-8 text-white" dangerouslySetInnerHTML={{ __html: fullBlogContent }}></p>
                            <div className="flex flex-col mb-7">
                                <div className='flex'>
                                    <FontAwesomeIcon onClick={handleLike} className={`pr-2 mb-5 ${likes !== 0 ? `text-red-500` : ''} h-6`} icon={faHeart}></FontAwesomeIcon>{likes}
                                </div>
                                <div className="space-y-2">
                                    {comments.map((comment) => (
                                        <div key={comment.id} className="bg-gray-100 rounded-lg shadow p-4">
                                            <p className="text-gray-800 text-base ">{comment.content}</p>
                                            <p className="text-gray-600 text-sm mt-1">
                                                By: {comment.user}, {comment.date_posted}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex mt-4">
                                    <textarea
                                        value={newContent}
                                        onChange={(e) => setNewContent(e.target.value)}
                                        className="flex-grow border border-gray-300 rounded p-2 mr-2 text-gray-800 bg-gray-100"
                                        placeholder="Add a comment"
                                    >
                                    </textarea>
                                    <button
                                        onClick={handleComment}
                                        className="bg-blue text-white font-semibold py-2 px-3 rounded"
                                    >
                                        <FontAwesomeIcon className='pr-2' icon={faComment}></FontAwesomeIcon>
                                        Add Comment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullBlogPage;

