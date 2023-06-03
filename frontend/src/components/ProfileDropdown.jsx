import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import defaultpfp from '../assets/Images/defaultpfp.avif'
import { Link } from 'react-router-dom'
const ProfileDropdown = () => {
    return (
        <div className="">
            <Menu as="div" className="relative inline-block text-left ">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <img className="w-10 h-10 rounded-full" src={defaultpfp} />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link to={`/userdashboard`}
                                        className={`${active ? 'bg-blue text-white' : 'text-dimWhite'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Dashboard
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link to={`/editprofile`}
                                        className={`${active ? 'bg-blue text-white' : 'text-dimWhite'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Edit Profile
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link to={`/userdashboard/#myblogs`}
                                        className={`${active ? 'bg-blue text-white' : 'text-dimWhite'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        My Blogs
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-blue text-white' : 'text-dimWhite'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Sign Out
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default ProfileDropdown