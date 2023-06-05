import BlogDetails from '../BlogDetails'
import { useParams } from 'react-router-dom';
import UsersBlogCard from './UsersBlogCard'

const UserAllBlogs = () => {
    const { id } = useParams();
    return (
        <section id="myblogs" className=" body-font max-w-screen-xl mx-auto">
            <div className="px-auto py-11">
                <h2 className="text-2xl md:text-4xl ml-5 py-4 font-semibold">Check out <span className="text-blue">My Blogs</span></h2>
                <div className="flex flex-wrap mx-auto">
                    <BlogDetails blogId={id} />
                    <UsersBlogCard />
                </div>
            </div>
        </section>
    )
}

export default UserAllBlogs

