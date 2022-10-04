import React from 'react'
import style from './Navbar.module.css'
import cnlogo from './assets/cnlogo.png'
function Navbar() {
    return (
        <div>
  <nav className="dark:bg-opacity-60 backdrop-blur-lg backdrop-filter px-2 sm:px-4 py-2.5 dark:bg-neutral-900 fixed w-full z-20 top-0 left-0 border-b border-neutral-900 dark:border-neutral-900  ">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="/" className="flex items-center">
      <img src={cnlogo} className="mr-3 h-5 sm:h-9" alt="CN Logo"/>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-gradient-to-r from-orange-600 to-amber-500 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-600">Join Us</button>
  </div>
  <div className="hidden justify-between items-center w-full md:flex ml-10 md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 border  md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0">
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white" aria-current="page">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Domains</a>
      </li>
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
      </li>
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Events</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar