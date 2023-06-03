import defaultpfp from '../assets/Images/defaultpfp.avif'
import { Link } from "react-router-dom"
const UserProfile = () => {
    return (
        <section className="text-white body-font max-w-screen-xl mx-auto">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <img className="w-20 h-20 lg:w-32 lg:h-32 rounded-full" src={defaultpfp} alt="Rounded avatar" />
                        <div className="h-1 mt-2 w-20 lg:w-32 bg-blue rounded"></div>
                        <h1 className="sm:text-3xl mt-3 text-2xl font-medium title-font mb-2 text-white">Full Name</h1>
                        <p className="w-2/3 leading-relaxed text-gray-500">Subtitle Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, distinctio obcaecati excepturi blanditiis nihil non alias enim, rem iure fugiat labore pariatur vel dicta quod corporis sapiente dolorem in? Suscipit maxime nemo ipsam.</p>
                    </div>

                    <div className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        <h1 className="sm:text-3xl mt-3 text-2xl font-medium title-font mb-2 text-white">Contact Details</h1>
                        <h1 className=" mt-3 text-base font-semibold title-font mb-2 text-white">E-mail<span className="w-2/3 leading-relaxed text-gray-500"> name@example.com</span></h1>
                        <Link to={`/editprofile`}>
                            <button className='bg-blue px-3 mr-2 rounded-md py-2 text-base text-white border border-blue mt-2'>Edit Profile</button>
                        </Link>
                    </div>

                </div>
                <div className="grid md:grid-cols-1 xl:grid-cols-3 place-items-center">
                    <div className="w-full md:w-2/3 p-4 relative">
                        <div className="border p-6 rounded-lg h-72">
                            <h2 className="text-xl text-white font-semibold mb-4">About Me</h2>
                            <Link to={`/editprofile`} className="relative items-center justify-start inline-block px-3 py-1 overflow-hidden font-bold rounded-full group">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[15%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary">+ Add Bio</span>
                                <span className="absolute inset-0 border-2 border-transparent rounded-full"></span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 p-4 relative">
                        <div className="border p-6 rounded-lg h-72">
                            <h2 className="text-xl text-white font-semibold mb-4">My Tech Stack</h2>
                            <Link to={`/editprofile`} className="relative items-center justify-start inline-block px-3 py-1 overflow-hidden font-bold rounded-full group">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[15%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary">+ Add Stack</span>
                                <span className="absolute inset-0 border-2 border-transparent rounded-full"></span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 p-4 relative">
                        <div className="border p-6 rounded-lg h-72">
                            <h2 className="text-xl text-white font-semibold mb-4">Other Interests</h2>
                            <Link to={`/editprofile`} className="relative items-center justify-start inline-block px-3 py-1 overflow-hidden font-bold rounded-full group">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[15%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary">+ Add Interests</span>
                                <span className="absolute inset-0 border-2 border-transparent rounded-full"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfile
