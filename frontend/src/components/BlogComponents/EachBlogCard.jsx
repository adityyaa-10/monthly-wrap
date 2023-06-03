/* eslint-disable react/prop-types */
import { useState } from 'react';
import reactbg from '../../assets/Images/react.png'

const EachBlogCard = (props) => {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <section className='w-full md:w-1/2 xl:w-1/3'>
            <div className="p-4">
                <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={reactbg}
                        alt="blog"
                    />
                    <div className="flex items-center justify-center">
                        <h2 className="text-lg font-medium text-white mx-auto mt-4">{props.title}</h2>
                    </div>
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs font-medium text-white mb-1">{props.category}</h2>
                        <h1 className="text-lg font-medium text-indigo-500 mb-3 ">{props.author}</h1>
                        <div className="leading-relaxed mb-3">
                            {isReadMore
                                ? 'Expanded content of the blog post goes here.'
                                : 'Shortened content of the blog post goes here.'}
                        </div>
                        <div className="flex items-center flex-wrap">
                            <button
                                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                onClick={toggleReadMore}
                            >
                                {isReadMore ? 'Read Less' : 'Read More'}
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EachBlogCard;