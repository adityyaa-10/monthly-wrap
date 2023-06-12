import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import reactbg from '../assets/Images/react.png';

const FullBlogPage = () => {
    const { title, category, author } = useParams();
    const navigate = useNavigate();

    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState(0);

    // Fetch the full blog content, comments, and likes from your API or data source
    const fullBlogContent = "This is the full content of the blog post.";
    const comments = []; // An array to store comments
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const addComment = () => {
        if (comment.trim() !== '') {
            comments.push(comment);
            setComment('');
        }
    };

    const incrementLikes = () => {
        setLikes(likes + 1);
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
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <h2 className="text-xl font-medium mb-4">Category: {category}</h2>
                <h3 className="text-lg mb-4">Author: {author}</h3>
                <p className="text-base leading-7 mb-8">{fullBlogContent}</p>

                <div className="mb-6">
                    <h4 className="text-lg font-medium mb-2">Comments:</h4>
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="mb-2">
                                {comment}
                            </div>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </div>

                <div className="flex items-center mb-4">
                    <button
                        onClick={incrementLikes}
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded mr-2"
                    >
                        Like
                    </button>
                    <span>{likes}</span>
                </div>

                <div className="mb-4">
                    <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="Write a comment..."
                        className="w-full border border-gray-300 rounded p-2"
                    ></textarea>
                </div>
                <button
                    onClick={addComment}
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
                >
                    Add Comment
                </button>
            </div>
        </div>
    );
};

export default FullBlogPage;