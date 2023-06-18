import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';

const BlogList = (props) => {
    const [blogs, setBlogs] = useState([]);
    const { title, category, author } = props;
    const [isReadMore, setIsReadMore] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const openFullBlog = () => {
        navigate(`/blogs/${title}/${author}/${category}`);
    };

    const fetchBlogs = async () => {
        try {
            const accessToken = Cookies.get('new_access_token');

            const response = await fetch('http://127.0.0.1:8000/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.status === 401) {
                refreshAccessToken();
            } else if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            } else {
                const data = await response.json();
                setBlogs(data.reverse());
            }
        } catch (error) {
            console.error(error);
        }
    };

    const refreshAccessToken = async () => {
        try {
            const refreshToken = Cookies.get('refresh_token');

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

            Cookies.set('access_token', data.access_token);

            fetchBlogs();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    },);

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <section className="max-w-screen-xl mx-auto body-font">
            <div className="px-auto py-11">
                <h2 className="text-2xl md:text-4xl ml-5 py-4 font-semibold">
                    Browse <span className="text-blue">Blogs</span>
                </h2>
                <div className="max-w-md mx-auto py-11">
                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
                        <div className="grid place-items-center h-full w-12 text-dimWhite cursor-pointer bg-blue hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        <input
                            className="h-full w-full outline-white text-sm text-primary pr-2 bg-white"
                            type="text"
                            placeholder="Search By Title"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex flex-wrap mx-auto'>
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog) => (
                            <section key={blog.id} className='w-full md:w-1/2 xl:w-1/3'>
                                <div className="p-4">
                                    <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img
                                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                                            src={blog.cover_image}
                                            alt="Cover Image"
                                        />
                                        <div className="flex items-center justify-center">
                                            <h2 className="text-lg font-medium text-white mx-auto mt-4">{blog.title.toUpperCase()}</h2>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs font-medium text-white mb-1">{blog.category.toUpperCase()}</h2>
                                            <div className="leading-relaxed mb-3">
                                                {isReadMore
                                                    ? 'Expanded content of the blog post goes here.'
                                                    : 'Shortened content of the blog post goes here.'}
                                            </div>
                                            <div className="flex items-center flex-wrap">
                                                {isReadMore ? (
                                                    <button
                                                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                                        onClick={toggleReadMore}
                                                    >
                                                        Read Less
                                                        <svg
                                                            className="w-4 h-4 ml-2"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M5 12h14"></path>
                                                        </svg>
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                                        onClick={openFullBlog}
                                                    >
                                                        Read More
                                                        <svg
                                                            className="w-4 h-4 ml-2"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))
                    ) : (
                        <div className="lg:w-[65%] w-full md:pr-16 lg:pr-0 pr-0 lg:block mx-auto">
                            <Player
                                autoplay
                                loop
                                src="https://assets9.lottiefiles.com/packages/lf20_xiebbQE7S1.json"
                                style={{ height: '100%', width: '100%' }}
                            ></Player>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default BlogList;

BlogList.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};
