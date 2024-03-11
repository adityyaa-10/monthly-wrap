import { useState } from "react";
import Cookies from 'js-cookie';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectForm = () => {
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        image: null,
        title: '',
        description: '',
        tech_used: '',
        project_link: ''
    });

    const refreshAccessToken = async () => {
        try {
            const refreshToken = Cookies.get('new_refresh_token');

            const response = await fetch('http://127.0.0.1:8000/api/users/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refresh_token: refreshToken }),
            });

            if (!response.ok) {
                throw new Error('Failed to refresh access token');
            }

            const data = await response.json();

            Cookies.set('new_access_token', data.access_token);
        } catch (error) {
            console.error('Error refreshing access token:', error);
            throw error;
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const accessToken = Cookies.get('new_access_token');

            const form = new FormData();
            form.append('image', formData.image);
            form.append('title', formData.title);
            form.append('description', formData.description);
            form.append('tech_used', formData.tech_used);
            form.append('project_link', formData.project_link);

            const response = await fetch('http://127.0.0.1:8000/api/users/projects/', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: form,
            });

            if (!response.ok) {
                if (response.status === 401) {
                    await refreshAccessToken();
                    const newAccessToken = Cookies.get('new_access_token');
                    const retryResponse = await fetch('http://127.0.0.1:8000/query/contactus/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${newAccessToken}`,
                        },
                        body: form,
                    });

                    if (!retryResponse.ok) {
                        toast.error('Server did not respond', {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                } else {
                    toast.error('Server did not respond', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            }
            else {
                // Handle success here
                toast.success('Message sent!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    return (
        <>
            <ToastContainer />
            <section className="body-font relative max-w-screen-lg mx-auto">
                <div className="container px-5 py-11 mx-auto">
                    <div className="flex flex-col w-full mb-3">
                        <h1 className="xl:text-3xl sm:text-2xl text-xl font-semibold mb-4 ">Add New Project</h1>
                        <img
                            src={image ? URL.createObjectURL(image) : "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400"}
                            alt="Cover"
                            className="md:h-84 w-full mx-auto my-2 object-contain rounded-md"
                            style={{ maxHeight: '300px', maxWidth: '100%' }}
                        />
                    </div>
                    <form className="mx-auto" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -m-2">
                            <div className='p-2 w-full right-0'>
                                <h2 className='pb-5'>Select an image to showcase your project</h2>
                                <input
                                    type="file"
                                    accept="image/*"
                                    alt="img"
                                    name="image"
                                    id="image"
                                    onChange={handleFileChange}
                                    className="mt-1 p-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm"
                                />
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative mb-4">
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">Title</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="title"
                                        className="text-primary block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                        placeholder="Title of the project"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative mb-4">
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">Description</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="description"
                                        className="text-primary block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                        placeholder="Description of the project"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative mb-4">
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">Tech Used</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="tech_used"
                                        className="text-primary block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                        placeholder="Tech Stack comma separated"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative mb-4">
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">Public URL/ GitHub URL</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="project_link"
                                        className="text-primary block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                        placeholder="URL of the project"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button type="submit" className='flex mx-auto bg-blue px-3  rounded-md py-2 text-base text-white border border-blue mt-2'>Add Project</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ProjectForm
