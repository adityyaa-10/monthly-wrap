import UsersBlogCard from './UsersBlogCard'

const UserAllBlogs = () => {
    return (
        <section id="myblogs" className=" body-font max-w-screen-xl mx-auto">
            <div className="px-auto py-11">
                <h2 className="text-2xl md:text-4xl ml-5 py-4 font-semibold">Check out <span className="text-blue">My Blogs</span></h2>
                <div className="flex flex-wrap mx-auto">
                    <UsersBlogCard />
                </div>
            </div>
        </section>
    )
}

export default UserAllBlogs

