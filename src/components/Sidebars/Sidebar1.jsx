import React from 'react'
import 'flowbite'
import 'flowbite-react'
import PButton from '../Buttons/PButton';
import SButton from '../Buttons/SButton';

const Sidebar1 = () => (
  <section className=''>

    <nav class="fixed top-0 z-50 w-full bg-primary">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray- hover:bg-gray-700 focus:ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <a href="https://flowbite.com" class="flex ml-2 md:mr-24">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
              <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">Monthly Wrap</span>
            </a>
          </div>
          <div class="flex items-center" >
            <div class="flex items-center ml-3 ">
              <div>
                <PButton
                  content='Sign In'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0 bg-primary" aria-label="Sidebar">
      <div class="h-full px-3 pb-4 overflow-y-auto bg-primary">
        <ul class="space-y-2 font-medium">
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg text-dimWhite hover:bg-gray-700">
              <svg aria-hidden="true" class="w-6 h-6  transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              <span class="ml-3">Monthly theme</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-dimWhite">Alumni</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-dimWhite">Clubs</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-dimWhite">Library</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-dimWhite">Cheatsheet</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-dimWhite">About</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-dimWhite">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </section>

);

export default Sidebar1