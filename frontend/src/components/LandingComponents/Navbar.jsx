import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to={`/`}>
        <span className="self-center text-xl font-semibold sm:text-2xl lg:text-3xl whitespace-nowrap text-white">Monthly <span className='text-blue'>Wrap</span></span>
      </Link>
      <div className="list-none sm:flex hidden justify-end items-center flex-1">
        <Link to={`/login`} className={`py-3 px-5 bg-blue font-poppins font-medium text-[18px] text-white outline-none rounded-[10px]`}>
          Login
        </Link>
      </div>


    </nav>
  )
}

export default Navbar