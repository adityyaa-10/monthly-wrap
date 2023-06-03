import { useState } from 'react'
import EachBlogCard from './EachBlogCard'
import { Player } from '@lottiefiles/react-lottie-player';

const Blogs = () => {
    const blogdetails = [
        {
            title: "pehla title",
            category: 'first',
            author: 'aditya pandey',
            id: 0,
        },
        {
            title: "dusra title",
            category: 'second',
            author: 'adi',
            id: 1,
        },
        {
            title: "teesra title",
            category: 'third',
            author: 'pandey',
            id: 2,
        },
    ];
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredBlogs = blogdetails.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getBlog = (id) => {
        const blog = filteredBlogs.find((blog) => blog.id === id);
        console.log(blog);
    };

    const capitalizeFirstLetter = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };


    return (
        <section className="max-w-screen-xl mx-auto body-font">
            <div className="px-auto py-11">
                <h2 className="text-2xl md:text-4xl ml-5 py-4 font-semibold">Browse <span className="text-blue">Blogs</span></h2>
                <div className='max-w-md mx-auto py-11'>
                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
                        <div className="grid place-items-center h-full w-12 text-dimWhite cursor-pointer bg-blue hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            className="h-full w-full outline-white text-sm text-primary pr-2 bg-white"
                            type="text"
                            placeholder="Search By Title"
                            value={searchTerm}
                            onChange={handleSearch} />
                    </div>
                </div>
                <div className="flex flex-wrap mx-auto">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog) => (
                            <EachBlogCard
                                {...blog}
                                key={blog.id}
                                getBlog={getBlog}
                                title={blog.title.toUpperCase()}
                                category={capitalizeFirstLetter(blog.category)}
                                author={capitalizeFirstLetter(blog.author)}
                            />
                        ))
                    ) : (
                        <div className="lg:w-[65%] w-full md:pr-16 lg:pr-0 pr-0 lg:block mx-auto">
                            <Player
                                autoplay
                                loop
                                src="https://assets9.lottiefiles.com/packages/lf20_xiebbQE7S1.json"
                                style={{ height: '100%', width: '100%' }}
                            >
                            </Player>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Blogs

