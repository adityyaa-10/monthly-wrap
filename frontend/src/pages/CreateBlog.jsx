import BlogCreate from "../components/BlogCreate"
import Sidebar from "../components/Sidebar"
const CreateBlog = () => {
    return (
        <div>
            <div className='float-left'>
                <Sidebar />
            </div>
            <div className="p-4 sm:ml-64 ">
                <div className="p-4  mt-16 text-white">
                    <BlogCreate />
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
