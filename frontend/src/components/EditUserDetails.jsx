import defaultpfp from '../assets/Images/defaultpfp.avif'
const EditUserDetails = () => {
    return (
        <section className=" body-font relative max-w-screen-lg mx-auto container px-5 py-11 text-white">
            <h2 className="mb-4 text-4xl font-bold dark:text-white -ml-1">Edit <span className='text-blue'> Profile </span></h2>
            <form>
                <div className="flex flex-col">
                    <div className="mb-6 w-full">
                        <label htmlFor="profilepicture" className="block mb-2 text-base font-semibold">Profile Picture</label>
                        <img className="w-20 h-20 lg:w-32 lg:h-32 rounded-full mb-5" src={defaultpfp} alt="Rounded avatar" />
                        <input type='file' accept='image/*' alt='img' />
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="fullname" className="block mb-2 text-base font-semibold">Full Name</label>
                            <input type="fullname" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700" placeholder="Full Name" />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="username" className="block mb-2 text-base font-semibold">Username</label>
                            <input id="username" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 " placeholder="Username" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="subtitle" className="block mb-2 text-base font-semibold">Subtitle</label>
                            <input type="subtitle" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 " placeholder="Add a Subtitle for your profile" />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="phonenumber" className="block mb-2 text-base font-semibold">Phone Number</label>
                            <input id="phonenumber" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 " placeholder="Phone number" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="kietemail" className="block mb-2 text-base font-semibold">KIET E-Mail</label>
                            <input type="kietemail" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 " placeholder="KIET E-Mail ID" />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="personalemail" className="block mb-2 text-base font-semibold">Personal E-Mail</label>
                            <input id="personalemail" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 " placeholder="Personal E-Mail ID" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="twitterurl" className="block mb-2 text-base font-semibold">Twitter URL</label>
                            <input type="twitterurl" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 " placeholder="https://twitter.com/username" />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="githuburl" className="block mb-2 text-base font-semibold">GitHub URL</label>
                            <input id="githuburl" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 " placeholder="https://github.com/username" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="linkedinurl" className="block mb-2 text-base font-semibold">LinkedIn URL</label>
                            <input id="linkedinurl" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 " placeholder="https://www.linkedin.com/in/username/" />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="stackurl" className="block mb-2 text-base font-semibold">Stack Overflow URL</label>
                            <input id="stackurl" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 " placeholder="https://stackoverflow.com/users/19778067/username" />
                        </div>
                    </div>
                    <div className="mb-6 w-full p-2">
                        <label htmlFor="about" className="block mb-2 text-base font-semibold">About</label>
                        <textarea id="about" rows="4" className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us something about yourself..."></textarea>
                    </div>
                    <div className="mb-6 w-full p-2">
                        <label htmlFor="techstack" className="block mb-2 text-base font-semibold">Tech Stack</label>
                        <textarea id="techstack" rows="4" className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Add your tech stack here!"></textarea>
                    </div>
                    <div className="mb-6 w-full p-2">
                        <label htmlFor="otherinterests" className="block mb-2 text-base font-semibold">Other Interests</label>
                        <textarea id="otherinterests" rows="4" className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us about your interests apart from tech"></textarea>
                    </div>
                </div>
                <button type="submit" className='bg-blue px-3 mr-2 rounded-md py-2 text-base border border-blue mt-2'>Update Profile</button>
            </form>
        </section>
    )
}

export default EditUserDetails
