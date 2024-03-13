/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import Modal from './Modal'
import { Link, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'


const EachUserProjects = () => {
    const { user } = useParams();
    const [projects, setProjects] = useState([]);
    const [nextItems, setNextItems] = useState(6)
    const [showModal, setShowModal] = useState(false)
    const [activeProject, setActiveProject] = useState(null);

    const fetchProjects = async () => {
        try {
            const accessToken = Cookies.get('new_access_token');

            const response = await fetch(`http://127.0.0.1:8000/api/users/profile/projects/${user}/`, {
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
                setProjects(data.reverse());
            }
        } catch (error) {
            // console.error(error);
        }
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

            Cookies.set('access_token', data.access_token);

            fetchProjects();
        } catch (error) {
            // console.error(error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    }

    const showModalHandler = (id) => {
        // Find the project with the given id
        const project = projects.find(project => project.id === id);
        if (project) {
            setActiveProject(project);
            setShowModal(true);
        }
    };


    return (
        <section id='projects'>
            <div className="px-auto py-11">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h2 className="text-2xl md:text-4xl ml-5 py-5 font-semibold">
                            Check out <span className="text-blue">My Projects</span>
                        </h2>
                    </div>
                    <div className="flex gap-3">
                        <Link to={`/users/${user}/addproject`} className='text-white bg-blue py-2 px-4 rounded-[8px]'>
                            Add Project
                        </Link>
                    </div>
                </div>
                <div className='flex items-center gap-4 flex-wrap mt-12'>
                    {projects.slice(0, nextItems)?.map((project, index) => (
                        <div
                            className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'
                            key={index}
                        >
                            <figure style={{ height: "200px" }}>
                                <img
                                    className='rounded-[8px] shadow-md w-full h-full object-cover'
                                    src={`http://127.0.0.1:8000${project.image}`}
                                    alt=""
                                />
                            </figure>

                            <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                <div className='w-full h-full flex items-center justify-center'>
                                    <button onClick={() => showModalHandler(project.id)} className='text-white hover:bg-[#081e21] bg-dimBlue py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>See Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-6'>
                    {
                        nextItems < projects.length && projects.length > 6 && (<button onClick={loadMoreHandler} className='text-white bg-blue
                         hover:bg-dimBlue py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                            Load More
                        </button>)

                    }
                </div>
            </div>

            {showModal && <Modal setShowModal={setShowModal} project={activeProject} />}
        </section>
    )
}

export default EachUserProjects