import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import reactbg from '../assets/Images/react.png';
import Cookies from 'js-cookie';

const FullBlogPage = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [fullBlogContent, setFullBlogContent] = useState('');
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

    const goBack = () => {
        navigate(-1); // Navigate back to the previous URL
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <button
                    onClick={goBack}
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded mb-3"
                >
                    Go Back
                </button>
                <img src={reactbg} alt="Blog" className="mb-4 rounded-lg" />
                <h1 className="text-3xl font-bold mb-4">{title.toUpperCase()}</h1>
                <h2 className="text-xl font-medium mb-4">Category: {category}</h2>
                <h3 className="text-lg mb-4">Author: {author}</h3>
                <p className="text-base leading-7 mb-8" dangerouslySetInnerHTML={{ __html: fullBlogContent }}></p>
            </div>
        </div>
    );
};

export default FullBlogPage;