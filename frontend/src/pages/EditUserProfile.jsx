import Sidebar from '../components/Sidebar';
import EditUserDetails from '../components/EditUserDetails';

const EditUserProfile = () => {
    return (
        <div>
            <div className='float-left'>
                <Sidebar />
            </div>
            <div className="p-4 sm:ml-64 ">
                <div className="p-4  mt-16 text-white">
                    <EditUserDetails />
                </div>
            </div>
        </div>
    )
}

export default EditUserProfile
