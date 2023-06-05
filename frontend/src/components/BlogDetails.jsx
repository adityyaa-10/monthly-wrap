import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const BlogDetails = ({ blogId }) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/create/${blogId}`);
                setBlog(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [blogId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!blog) {
        return null;
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.category}</p>
            <img src={blog.coverImage} alt="Cover" />
            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
    );
};

BlogDetails.propTypes = {
    blogId: PropTypes.string.isRequired,
};

export default BlogDetails;