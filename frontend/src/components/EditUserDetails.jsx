import defaultpfp from '../assets/Images/defaultpfp.avif'
import { useState } from 'react'
const EditUserDetails = () => {
    const [profilePicture, setProfilePicture] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setProfilePicture(file);
    };
    return (
        <section className=" body-font relative max-w-screen-lg mx-auto container px-5 py-11 text-white">
            <h2 className="mb-4 text-4xl font-bold dark:text-white -ml-1">Edit <span className='text-blue'> Profile </span></h2>
            <form >
                <div className="flex flex-col">
                    <div className="mb-6 w-full">
                        <label htmlFor="profile_picture" className="block mb-2 text-base font-semibold">
                            Profile Picture
                        </label>
                        {profilePicture ? (
                            <img
                                className="w-20 h-20 lg:w-32 lg:h-32 rounded-full mb-5"
                                src={URL.createObjectURL(profilePicture)}
                                alt="Rounded avatar"
                            />
                        ) : (
                            <img
                                className="w-20 h-20 lg:w-32 lg:h-32 rounded-full mb-5"
                                src={defaultpfp}
                                alt="Rounded avatar"
                            />
                        )}
                        <input name='profile_picture' type='file' accept='image/*' alt='img' onChange={handleFileChange} />
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="user" className="block mb-2 text-base font-semibold">Username</label>
                            <input
                                name='user'
                                id="user"
                                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 "
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="phone_no" className="block mb-2 text-base font-semibold">Phone Number</label>
                            <input
                                name='phone_no'
                                id="phone_no"
                                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 "
                                placeholder="Phone number" />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="email" className="block mb-2 text-base font-semibold">E-Mail</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 "
                                placeholder="E-Mail"
                            />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="twitter_link" className="block mb-2 text-base font-semibold">Twitter URL</label>
                            <input
                                name='twitter_link'
                                type="twitter_link"
                                id="email"
                                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 "
                                placeholder="https://twitter.com/username" />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="github_link" className="block mb-2 text-base font-semibold">GitHub URL</label>
                            <input
                                name='github_link'
                                id="github_link"
                                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 "
                                placeholder="https://github.com/username" />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="linkedin_link" className="block mb-2 text-base font-semibold">LinkedIn URL</label>
                            <input
                                name='linkedin_link'
                                id="linkedin_link"
                                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 "
                                placeholder="https://www.linkedin.com/in/username/"
                            />
                        </div>
                        <div className="mb-6 w-full p-2">
                            <label htmlFor="about" className="block mb-2 text-base font-semibold">About</label>
                            <textarea name='about' id="about" rows="4" className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us something about yourself..."></textarea>
                        </div>
                        <div className="mb-6 w-full p-2">
                            <label htmlFor="techstack" className="block mb-2 text-base font-semibold">Tech Stack</label>
                            <textarea name='techstack' id="techstack" rows="4" className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Add your tech stack here!"></textarea>
                        </div>
                        <div className="mb-6 w-full p-2">
                            <label htmlFor="other_interests" className="block mb-2 text-base font-semibold">Other Interests</label>
                            <textarea name='other_interests' id="other_interests" rows="4" className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us about your interests apart from tech"></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" className='bg-blue px-3 mr-2 rounded-md py-2 text-base border border-blue mt-2'>Update Profile</button>
            </form>
        </section>
    )
}

export default EditUserDetails
