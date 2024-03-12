import { useState } from "react";
import Cookies from 'js-cookie';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectForm = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [techused, setTechUsed] = useState('')
    const [projectlink, setProjectLink] = useState('')

    const clearFormFields = () => {
        setImage(null);
        setTitle('');
        setDescription('');
        setTechUsed('');
        setProjectLink('');
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const accessToken = Cookies.get('new_access_token');

            const formData = new FormData();
            formData.append('image', image);
            formData.append('title', title);
            formData.append('description', description);
            formData.append('tech_used', techused);
            formData.append('project_link', projectlink);

            const response = await fetch('http://127.0.0.1:8000/api/users/projects/', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: formData,
            });

            if (!response.ok) {
                if (response.status === 401) {
                    await refreshAccessToken();
                    const newAccessToken = Cookies.get('new_access_token');
                    const retryResponse = await fetch('http://127.0.0.1:8000/api/users/projects/', {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${newAccessToken}`,
                        },
                        body: formData,
                    });

                    if (!retryResponse.ok) {
                        throw new Error('Server did not respond');
                    }
                } else {
                    throw new Error('Server did not respond');
                }
            }

            setImage(null);

            // Display success message
            toast.success('Project added successfully!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            clearFormFields();

        } catch (error) {
            console.error('Error adding project:', error);
            // Display error message
            toast.error('Failed to add project', {
                position: toast.POSITION.TOP_RIGHT,
            });
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
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative mb-4">
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">Description</label>
                                    <input
                                        type="text"
                                        id="description"
                                        name="description"
                                        className="text-primary block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                        placeholder="Description of the project"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative mb-4">
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">Tech Used</label>
                                    <input
                                        type="text"
                                        id="tech_used"
                                        name="tech_used"
                                        className="text-primary block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                        placeholder="Tech Stack comma separated"
                                        onChange={(e) => setTechUsed(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative mb-4">
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">Public URL/ GitHub URL</label>
                                    <input
                                        type="text"
                                        id="project_link"
                                        name="project_link"
                                        className="text-primary block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                        placeholder="URL of the project"
                                        onChange={(e) => setProjectLink(e.target.value)}
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
