import MonthlyTheme from '../components/MonthlyTheme/MonthlyTheme';
import Sidebar from '../components/Sidebar';
import Blogs from '../components/BlogComponents/Blogs';
const Home = () => (
    <div>
        <div className='float-left'>
            <Sidebar />
        </div>
        <div className="p-4 sm:ml-64 ">
            <div className="p-4 mt-16 text-white ">
                <MonthlyTheme />
                <Blogs />
            </div>
        </div>
    </div>

);

export default Home