import ProjectForm from "../components/AddProjectForm"
import Sidebar from "../components/Sidebar"

const AddProject = () => {
    return (
        <div>
            <div className='float-left'>
                <Sidebar />
            </div>
            <div className="p-4 sm:ml-64 ">
                <div className="p-4  mt-16 text-white">
                    <ProjectForm />
                </div>
            </div>
        </div>
    )
}

export default AddProject
