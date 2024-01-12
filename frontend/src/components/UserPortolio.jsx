import { Tab } from '@headlessui/react'
import UserAllBlogs from './EachUserBlogs/UserAllBlogs'
import EachUserProjects from './UserPortfolio/EachUserProjects'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function UserPortfolio() {

    return (
        <div className="w-full max-w-screen-xl mx-auto px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">

                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white text-gray-700 shadow'
                                    : 'text-blue-100 bg-white/[0.12] text-white'
                            )
                        }
                    >My Blogs
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white text-gray-700 shadow'
                                    : 'text-blue-100 bg-white/[0.12] text-white'
                            )
                        }
                    >My Projects
                    </Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Tab.Panel>
                        <div>
                            <UserAllBlogs />
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div>
                            <EachUserProjects />
                        </div>

                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
