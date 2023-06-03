import { useState } from 'react'
import close from '../../assets/LandingAssets/close.svg'
import menu from '../../assets/LandingAssets/menu.svg'
import { Link } from "react-router-dom"

const NavLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "join",
    title: "Join",
  },
];
const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
      <Link to={`/`}>
        <span className="self-center text-xl font-semibold sm:text-2xl lg:text-3xl whitespace-nowrap text-white">Monthly <span className='text-blue'>Wrap</span></span>
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {NavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === NavLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <Link to={`/#${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-w
        min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {NavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === NavLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
              >
                <Link to={`/${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar