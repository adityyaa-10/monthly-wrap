import reactbg from '../../assets/Images/react.png'
const CarouselCard = () => {
    return (
        <section>
            <div className="p-4 ">
                <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={reactbg} alt="blog" />
                    <div className='flex items-center justify-center'>
                        <h2 className="text-lg font-medium text-white mx-auto mt-4">TITLE OF THE BLOG</h2>
                    </div>
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs font-medium text-white mb-1">Web Development</h2>
                        <h1 className="text-lg font-medium text-indigo-500 mb-3 ">Author</h1>
                        <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <div className="flex items-center flex-wrap ">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CarouselCard
