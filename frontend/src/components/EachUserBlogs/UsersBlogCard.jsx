import tailwindlogo from '../../assets/Images/tailwind.jpg'
import likes from '../../assets/Images/like.png'
const UsersBlogCard = () => {
    return (
        <div className="p-4 w-full max-w-screen-lg mx-auto">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-neutral-900">
                <div className='my-9 mx-9' >
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg shadow-md" src={tailwindlogo} alt="blog" />
                </div>
                <div className='flex items-center justify-center'>
                    <h2 className="text-lg font-medium text-white mx-auto">TITLE OF THE BLOG</h2>
                </div>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">Web Development</h2>
                    <h1 className="title-font text-lg font-medium text-indigo-500 mb-3">Author</h1>
                    <p className="leading-relaxed mb-3 text-dimWhite">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <img className='w-9 h-9' src={likes} /><span>100</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersBlogCard
