import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import reactbg from '../assets/Images/react.png';
import Cookies from 'js-cookie';
import leftarrow from '../assets/Images/leftarrow.png'
const FullBlogPage = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [fullBlogContent, setFullBlogContent] = useState('');
    // const [content, setContent] = useState('');
    const [newContent, setNewContent] = useState('');
    const [likes, setLikes] = useState(0);
    // Fetch the full blog content, comments, and likes from your API or data source
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
                    setCategory(data.category);
                    setFullBlogContent(data.content);
                }
            } catch (error) {
                console.error(error);
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
            setCategory(data.category);
            setFullBlogContent(data.content);
            Cookies.set('new_access_token', data.access_token);
        } catch (error) {
            console.error(error);
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
            console.error(error);
        }
    };

    // const handleComment = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const new_access_token = Cookies.get('new_access_token');

    //         const response = await fetch(`http://127.0.0.1:8000/${title}/comment/`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${new_access_token}`,
    //             },
    //             body: JSON.stringify({ content: newContent }),
    //         });

    //         if (response.status === 401) {
    //             await refreshAccessToken();
    //             handleComment(e); // Retry commenting after token refresh
    //         } else if (!response.ok) {
    //             throw new Error('Failed to add comment');
    //         } else {
    //             const data = await response.json();
    //             setContent(data.content);
    //             setNewContent('');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="container mx-auto py-24 px-4">
            <div className="max-w-2xl mx-auto bg-primary rounded-lg shadow-lg p-6">
                <div
                    onClick={goBack}
                    className=" text-white font-semibold py-2 px-4 rounded mb-3"
                >
                    <img src={leftarrow} alt="" className='w-11 h-11' />
                </div>
                <img src={reactbg} alt="Blog" className="mb-4 rounded-lg" />
                <h1 className="text-3xl text-white font-bold mb-4">{title.toUpperCase()}</h1>
                <h2 className="text-xl text-dimWhite font-medium mb-4">Category: {category}</h2>
                <h3 className="text-lg text-white mb-4">Author: <span>{author}</span></h3>
                <p className="text-base leading-7 mb-8 text-white" dangerouslySetInnerHTML={{ __html: fullBlogContent }}></p>
                <div className="flex items-center mb-4">
                    <button
                        onClick={handleLike}
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded mr-3"
                    >
                        Like ({likes})
                    </button>
                    <textarea
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="Add a comment"
                    ></textarea>
                    <button
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded ml-3"
                    >
                        Comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FullBlogPage;