import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import defaultpfp from '../assets/Images/defaultpfp.avif';
import github from '../assets/LandingAssets/github.png';
import linkedin from '../assets/LandingAssets/linkedin.svg';
import twitter from '../assets/LandingAssets/twitter.svg';
import { Link, useParams } from 'react-router-dom';

const UserProfile = () => {
    const { user } = useParams();
    const [profileData, setProfileData] = useState(null);

    const fetchProfileData = async () => {
        try {
            const accessToken = Cookies.get('new_access_token');

            const response = await fetch(`http://127.0.0.1:8000/api/users/profiles/${user}/`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.status === 401) {
                refreshAccessToken();
            } else if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            } else {
                const data = await response.json();
                setProfileData(data);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const refreshAccessToken = async () => {
        try {
            const newRefreshToken = Cookies.get('refreshToken');

            const response = await fetch('http://127.0.0.1:8000/api/users/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refresh_token: newRefreshToken,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to refresh access token');
            }

            const data = await response.json();
            Cookies.set('new_access_token', data.access_token);
            return data.access_token;
        } catch (error) {
            console.error(error);
            // Handle error and redirect to login or show appropriate message
        }
    };

    useEffect(() => {
        fetchProfileData();
    },);

    return (
        <section className="text-white body-font max-w-screen-xl mx-auto">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <img
                            className="w-20 h-20 lg:w-32 lg:h-32 rounded-full"
                            src={defaultpfp}
                            alt="Rounded avatar"
                        />
                        <div className="h-1 mt-2 w-20 lg:w-32 bg-blue rounded"></div>
                        {profileData && (
                            <>
                                <h1 className="sm:text-3xl mt-3 text-2xl font-medium title-font mb-2 text-white">
                                    {profileData.name.toUpperCase()}
                                </h1>
                                <p className="w-2/3 leading-relaxed text-gray-500">
                                    {profileData.user.toLowerCase()}
                                </p>
                            </>
                        )}
                    </div>

                    <div className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        <h1 className="sm:text-3xl mt-3 text-2xl font-semibold title-font mb-2 text-white">
                            Contact Details
                        </h1>
                        {/* Render contact details when profileData is available */}
                        {profileData && (
                            <>
                                <h1 className=" mt-3 text-base font-semibold title-font mb-2 text-white">
                                    E-mail {' : '}
                                    <span className="w-2/3 leading-relaxed text-gray-500">
                                        {profileData.email}
                                    </span>
                                </h1>
                                <div className="flex py-5">
                                    <a href={profileData.github_link}>
                                        <img
                                            className="w-[30px] h-[30px] object-contain cursor-pointer mr-6"
                                            src={github}
                                            alt="github_link"
                                        />
                                    </a>
                                    <a href={profileData.linkedin_link}>
                                        <img
                                            className="w-[30px] h-[30px] object-contain cursor-pointer mr-6"
                                            src={linkedin}
                                            alt="linkedin_link"
                                        />
                                    </a>
                                    <a href={profileData.twitter_link}>
                                        <img
                                            className="w-[30px] h-[30px] object-contain cursor-pointer mr-6"
                                            src={twitter}
                                            alt="twitter_link"
                                        />
                                    </a>
                                </div>
                                <Link to={`/editprofile`}>
                                    <button className="bg-blue px-3 mr-2 rounded-md py-2 text-base text-white border border-blue mt-2">
                                        Edit Profile
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="grid md:grid-cols-1 xl:grid-cols-3 place-items-center">
                    <div className="w-full md:w-2/3 p-4 relative">
                        <div className="border p-6 rounded-lg h-72">
                            <h2 className="text-xl text-white font-semibold mb-4">About Me</h2>
                            {profileData && profileData.about ? (
                                <p>{profileData.about}</p>
                            ) : (
                                <Link
                                    to={`/editprofile`}
                                    className="relative items-center justify-start inline-block px-3 py-1 overflow-hidden font-bold rounded-full group"
                                >
                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[15%]"></span>
                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary">
                                        + Add Bio
                                    </span>
                                    <span className="absolute inset-0 border-2 border-transparent rounded-full"></span>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 p-4 relative">
                        <div className="border p-6 rounded-lg h-72">
                            <h2 className="text-xl text-white font-semibold mb-4">My Tech Stack</h2>
                            {profileData && profileData.techstack ? (
                                <p>{profileData.techstack}</p>
                            ) : (
                                <Link
                                    to={`/editprofile`}
                                    className="relative items-center justify-start inline-block px-3 py-1 overflow-hidden font-bold rounded-full group"
                                >
                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[15%]"></span>
                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary">
                                        + Add Stack
                                    </span>
                                    <span className="absolute inset-0 border-2 border-transparent rounded-full"></span>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 p-4 relative">
                        <div className="border p-6 rounded-lg h-72">
                            <h2 className="text-xl text-white font-semibold mb-4">Other Interests</h2>
                            {profileData && profileData.other_interests ? (
                                <p>{profileData.other_interests}</p>
                            ) : (
                                <Link
                                    to={`/editprofile`}
                                    className="relative items-center justify-start inline-block px-3 py-1 overflow-hidden font-bold rounded-full group"
                                >
                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[15%]"></span>
                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary">
                                        + Add Stack
                                    </span>
                                    <span className="absolute inset-0 border-2 border-transparent rounded-full"></span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
