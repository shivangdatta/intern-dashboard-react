'use client'
import React from 'react'
import 'flowbite'
import { useState } from 'react';



export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };


  return (
    <>
    <button
        type="button"
        className="fixed bottom-4 right-4 z-50 bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full p-2 lg:hidden"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
    <aside id="logo-sidebar"
        className={`absolute top-0 left-0 z-40 w-64 h-full transition-transform ${
          sidebarOpen ? '' : '-translate-x-full'
        } border-r border-gray-200 sm:translate-x-0 bg-[#8D7B68] border-[#292c30] mt-16 `}
        aria-label="Sidebar">
        <div className="h-full  pb-4 overflow-y-auto bg-[#222831] dark:-[#393E46] overflow-x-hidden">
            <button type="button" className="text-white bg-[#00ADB5] hover:-[#34c3eb] focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-full">
            &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
            <span className='text-xl'> &nbsp; &nbsp;New Post</span>
            </button>
            {/* <hr className='mt-3 bg-gray-800'/> */}

        
            <ul className="space-y-2 font-medium">
            <div className='container w-full '>   
            <li>
					<button type="button" className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group  text-white dark:hover:bg-gray-700 k" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill='#00ADB5'viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item='true'>Dashboard</span>
                  <svg sidebar-toggle-item='true' className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill='#00ADB5' d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
					<ul id="dropdown-example" className="hidden py-2 space-y-2">
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Templates</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Analytics</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Helpdesk</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Monitoring</a>
						</li>
					</ul>
				</li>
                </div>
            </ul>
            <ul className="space-y-2 font-medium">
            <div className='container w-full '>   
            <li>
					<button type="button" className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group  text-white dark:hover:bg-gray-700 k" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill='#00ADB5'viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item='true'>Urgent Hire</span>
                  <svg sidebar-toggle-item='true' className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill='#00ADB5' d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
					<ul id="dropdown-example" className="hidden py-2 space-y-2">
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Templates</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Analytics</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Helpdesk</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Monitoring</a>
						</li>
					</ul>
				</li>
                </div>
            </ul>
            <ul className="space-y-2 font-medium">
            <div className='container w-full '>   
            <li>
					<button type="button" className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group  text-white dark:hover:bg-gray-700 k" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill='#00ADB5'viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item='true'>Collaborate</span>
                  <svg sidebar-toggle-item='true' className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill='#00ADB5' d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
					<ul id="dropdown-example" className="hidden py-2 space-y-2">
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Templates</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Analytics</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Helpdesk</a>
						</li>
						<li>
							<a href="#"
								className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Monitoring</a>
						</li>
					</ul>
				</li>
                </div>
            </ul>
            
        </div>
    </aside>

	
    </>
  )
}
