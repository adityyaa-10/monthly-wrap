import defaultblogpic from '../assets/Images/selectcover.png'
import BlogRTF from './BlogRTF'
const BlogCreate = () => {
    return (
        <div>
            <section className="body-font relative max-w-screen-lg mx-auto">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col w-full mb-3">
                        <h1 className="xl:text-3xl sm:text-2xl text-xl font-semibold mb-4 "> <span className='text-blue'>Create</span> and <span className='text-blue'>Customise</span> your blog here!</h1>
                        <img src={defaultblogpic} alt='default' className=" md:h-84 w-full mx-auto my-2 object-center object-fill rounded-lg shadow-md" />
                    </div>
                    <div className="mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className='p-2 w-full right-0'>
                                <h2 className='pb-5'>Select a cover image for your blog</h2>
                                <input type='file' accept='image/*' alt='img' />
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <input type="text" placeholder='Title of your blog' id="title" name="title" className="w-full bg-gray-200 rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <input type="text" placeholder='Category of Blog' id="blogCategory" name="blogCategory" className="w-full bg-gray-200 rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <BlogRTF />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button type="submit" className='flex mx-auto bg-blue px-3  rounded-md py-2 text-base text-white border border-blue mt-2'>Publish Blog</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogCreate
