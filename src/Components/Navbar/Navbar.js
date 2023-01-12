import React from 'react'
import style from './Navbar.module.css'
import cnlogo from './assets/cnlogo.png'
import { Link, Links } from 'react-router-dom'

function Navbar() {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
    return (
    <div>
  <nav className="dark:bg-opacity-60 backdrop-blur-lg backdrop-filter px-2 sm:px-4 py-2.5 dark:bg-neutral-900 fixed w-full z-20 top-0 left-0 border-b border-neutral-900 dark:border-neutral-900  ">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
   <Link to="/" onClick={goToTop} className="flex items-center mx-2">
      <img src={cnlogo} className="h-6 md:h-8" alt="CN Logo"/>
    </Link>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-[#EE4623] font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-[#EE4623]">Join Us</button>
  </div>
  <div className="hidden justify-between items-center w-full md:flex ml-10 md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex text-white flex-col p-4 mt-4 border  md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0">
      <li>
        <a href="/#about" onClick={goToTop} className="block py-2 pr-4 pl-3 md:dark:text-white focus:text-white dark:hover:text-white md:text-white-700 md:p-0 " aria-current="page">About</a>
      </li>
      <li>
        <Link to="/domains" onClick={goToTop} className="block py-2 pr-4 pl-3  md:dark:text-white focus:text-white md:p-0 dark:hover:text-white ">Domains</Link>
      </li>
      <li>
        <Link to="/team" onClick={goToTop} className="block py-2 pr-4 pl-3  md:dark:text-white focus:text-white  md:p-0 dark:hover:text-white">Team</Link>
      </li>
      <li>
        <Link to="/events" onClick={goToTop} className="block py-2 pr-4 pl-3  md:dark:white focus:text-white  md:p-0   dark:hover:text-white ">Events</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar