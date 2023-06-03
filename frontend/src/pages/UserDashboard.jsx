import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import UserAllBlogs from '../components/EachUserBlogs/UserAllBlogs';

const UserDashboard = () => {
    return (
        <div>
            <div className='float-left'>
                <Sidebar />
            </div>
            <div className="p-4 sm:ml-64 ">
                <div className="p-4 border-2 border-dashed rounded-lg border-gray-700 mt-16 text-white">
                    <UserProfile />
                    <UserAllBlogs />
                </div>
            </div>
        </div>
    )
}

export default UserDashboard
