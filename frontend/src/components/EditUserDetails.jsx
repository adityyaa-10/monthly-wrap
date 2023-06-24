/* eslint-disable no-unused-vars */
import defaultpfp from '../assets/Images/defaultpfp.avif'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useParams, useNavigate } from 'react-router-dom'
const EditUserDetails = () => {
    const { user } = useParams();
    const [profilePicture, setProfilePicture] = useState(null);
    const navigate = useNavigate()
    const [initialData, setInitialData] = useState({
        user: '',
        twitter_link: '',
        github_link: '',
        linkedin_link: '',
        about: '',
        techstack: '',
        other_interests: ''
    });

    const [formData, setFormData] = useState({
        user: '',
        twitter_link: '',
        github_link: '',
        linkedin_link: '',
        about: '',
        techstack: '',
        other_interests: ''
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setProfilePicture(file);
        setFormData((prevData) => ({
            ...prevData,
            profile_picture: file,
        }));
    };
    useEffect(() => {
        // Fetch initial user data here
        const fetchUserData = async () => {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8000/api/users/profiles/${user}/`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${Cookies.get('new_access_token')}`,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setInitialData(data);
                    setFormData(data);
                } else if (response.status === 401) {
                    const new_refresh_token = Cookies.get('new_refresh_token')
                    const refreshResponse = await fetch(
                        'http://127.0.0.1:8000/api/users/token/refresh/',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ refresh: new_refresh_token }),
                            credentials: 'include', // Include cookies in the request
                        });

                    if (refreshResponse.ok) {
                        const data = await refreshResponse.json();
                        const newAccessToken = data.access_token;
                        Cookies.set('new_access_token', newAccessToken);
                        fetchUserData() // Retry the form submission with the new access token
                    } else {
                        // Refresh token failed or expired, handle error
                        // ...
                    }
                } else {
                    // Handle other error responses
                    // ...
                }
            } catch (error) {
                // Handle the error if needed
                // ...
            }
        };

        fetchUserData();
    }, [user]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                `http://127.0.0.1:8000/api/users/profiles/${user}/`,
                {
                    method: 'PUT',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${Cookies.get('new_access_token')}`,
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                navigate(`/${user}`)
                console.log(data)
            } else if (response.status === 401) {
                const new_refresh_token = Cookies.get('new_refresh_token')
                const refreshResponse = await fetch(
                    'http://127.0.0.1:8000/api/users/token/refresh/',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ refresh: new_refresh_token }),
                        credentials: 'include', // Include cookies in the request
                    });

                if (refreshResponse.ok) {
                    const refreshData = await refreshResponse.json();
                    const newAccessToken = refreshData.access_token;
                    Cookies.set('new_access_token', newAccessToken);
                    handleSubmit(event); // Retry the form submission with the new access token
                } else {
                    // Refresh token failed or expired, handle error
                    // ...
                }
            } else {
                // Handle other error responses
                // Example:
                const errorData = await response.json();
                console.error(errorData);
                // Handle the error if needed
            }
        } catch (error) {
            console.error(error);
            // Handle the error if needed
        }
    };
    return (
        <section className=" body-font relative max-w-screen-lg mx-auto container px-5 py-11 text-white">
            <h2 className="mb-4 text-4xl font-bold dark:text-white -ml-1">Edit <span className='text-blue'> Profile </span></h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <div className="mb-6 w-full">
                        <label htmlFor="profile_picture" className="block mb-2 text-base font-semibold">
                            Profile Picture
                        </label>
                        {profilePicture ? (
                            <img
                                className="w-20 h-20 lg:w-32 lg:h-32 rounded-full mb-5"
                                src={JSON.stringify(URL.createObjectURL(profilePicture))}
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
                                name="user"
                                id="user"
                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700"
                                placeholder="Username"
                                value={user}
                                disabled
                            />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="twitter_link" className="block mb-2 text-base font-semibold">Twitter URL</label>
                            <input
                                name='twitter_link'
                                type="twitter_link"
                                id="email"
                                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 "
                                placeholder="https://twitter.com/username"
                                onChange={handleInputChange}
                                value={formData.twitter_link} />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="github_link" className="block mb-2 text-base font-semibold">GitHub URL</label>
                            <input
                                name='github_link'
                                id="github_link"
                                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 "
                                placeholder="https://github.com/username"
                                onChange={handleInputChange}
                                value={formData.github_link}
                            />
                        </div>
                        <div className="mb-6 w-full md:w-1/2 p-2">
                            <label htmlFor="linkedin_link" className="block mb-2 text-base font-semibold">LinkedIn URL</label>
                            <input
                                name='linkedin_link'
                                id="linkedin_link"
                                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700 "
                                placeholder="https://www.linkedin.com/in/username/"
                                onChange={handleInputChange}
                                value={formData.linkedin_link}
                            />
                        </div>
                        <div className="mb-6 w-full p-2">
                            <label htmlFor="about" className="block mb-2 text-base font-semibold">About</label>
                            <input
                                name='about'
                                id="about"
                                rows="4"
                                className="block p-2.5 w-full text-sm text-primary bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Tell us something about yourself..."
                                onChange={handleInputChange}
                                value={formData.about}
                            >
                            </input>
                        </div>
                        <div className="mb-6 w-full p-2">
                            <label htmlFor="techstack" className="block mb-2 text-base font-semibold">Tech Stack</label>
                            <input
                                name='techstack'
                                id="techstack"
                                rows="4"
                                className="block p-2.5 w-full text-sm text-primary bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Add your tech stack here!"
                                onChange={handleInputChange}
                                value={formData.techstack}
                            >
                            </input>
                        </div>
                        <div className="mb-6 w-full p-2">
                            <label htmlFor="other_interests" className="block mb-2 text-base font-semibold">Other Interests</label>
                            <input
                                name='other_interests'
                                id="other_interests"
                                rows="4"
                                className="block p-2.5 w-full text-sm text-primary bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Tell us about your interests apart from tech"
                                onChange={handleInputChange}
                                value={formData.other_interests}
                            >
                            </input>
                        </div>
                    </div>
                </div>
                <button type="submit" className='bg-blue px-3 mr-2 rounded-md py-2 text-base border border-blue mt-2'>Update Profile</button>
            </form>
        </section>
    )
}

export default EditUserDetails