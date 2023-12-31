"use client"
import React from 'react';
import BackButton from './BackButton';
import { useState } from 'react';
import PortfolioData, { Project } from './PortfolioData';
import { FaFolderOpen } from "react-icons/fa";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? PortfolioData
      : PortfolioData.filter((project) => project.category === selectedCategory);

  return (
    <div className='overflow-y-auto h-screen md:h-auto'>
      

    <section id='portfolio' className='bg-gray-800 p-4 md:p-10 h-auto'>
    
      <div className='text-right md:pt-2 z-50'>
        <BackButton />
      </div>
      <h1 className='flex text-2xl md:text-3xl font-helvetica-neue tracking-wider font-light pb-2 text-white'>
        <FaFolderOpen className='mr-2' /> PORTFOLIO
      </h1>
      <div className="border-b border-gray-600 mb-4"></div>
      <p className='text-sm md:text-base opacity-60 text-white pb-2'>Our Work</p>
      <div className='flex overflow-x-auto scrollbar-hide space-x-2 md:space-x-4 mb-4 flex-nowrap'>
        <button
          className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
          onClick={() => handleCategoryClick('All')}
        >
          All
        </button>
        <button
          className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
          onClick={() => handleCategoryClick('commercial')}
        >
          Commercial
        </button>
        <button
          className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
          onClick={() => handleCategoryClick('residential')}
        >
          Residential
        </button>
        <button
          className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
          onClick={() => handleCategoryClick('hotels')}
        >
          Hotels
        </button>
        <button
          className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
          onClick={() => handleCategoryClick('industrial')}
        >
          Industrial
        </button>
        <button
          className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
          onClick={() => handleCategoryClick('institutional')}
        >
          Institutional
        </button>
        <button
          className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
          onClick={() => handleCategoryClick('pharmaceutical')}
        >
          Pharmaceutical
        </button>
        <button
          className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
          onClick={() => handleCategoryClick('religious')}
        >
          Religious
        </button>
        <button
          className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
          onClick={() => handleCategoryClick('villa')}
        >
          Villa
        </button>
      </div>
      <div className='scroll-container overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
          {filteredProjects.map((project, index) => (
            <div key={index} className='relative mb-4 md:mb-0'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto object-cover rounded-3xl transition-opacity hover:opacity-60 cursor-pointer'
              />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 hover:rounded-3xl transition-opacity cursor-pointer'>
                <div className='text-center' onClick={() => handleProjectClick(project)}>
                  <h1 className='text-base md:text-xl font-bold'>{project.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      {selectedProject && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80'>
          <div className='bg-white p-4 rounded-lg w-full md:w-1/2'>
            <h1 className='text-base md:text-xl font-bold'>{selectedProject.title}</h1>
            <img className='rounded-lg w-full' src={selectedProject.image} alt='' />
            <button
               className='bg-red-500 text-white px-2 py-1 rounded-md mt-2'
               onClick={closeModal}
            >
                 Close
            </button>
          </div>
        </div>
      )}
      
    </section>
  </div>
    // <div className='overflow-y-auto h-screen md:h-auto'>
    //   <section id='portfolio' className='bg-gray-800 p-4 md:p-10 h-auto overflow-y-auto md:overflow-y-hidden'>
    //     <div className='text-right md:pt-2 z-50'>
    //       <BackButton />
    //     </div>
    //     <h1 className='text-2xl md:text-3xl font-helvetica-neue tracking-wider font-light pb-2 text-white'>
    //       PORTFOLIO
    //     </h1>
    //     <p className='text-sm md:text-base opacity-60 text-white pb-2'>Our Work</p>
    //     <div className='flex overflow-x-auto scrollbar-hide space-x-2 md:space-x-4 mb-4 flex-nowrap'>
    //       <button
    //         className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
    //         onClick={() => handleCategoryClick('All')}
    //       >
    //         All
    //       </button>
    //       <button
    //         className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
    //         onClick={() => handleCategoryClick('commercial')}
    //       >
    //         Commercial
    //       </button>
    //       <button
    //         className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
    //         onClick={() => handleCategoryClick('residential')}
    //       >
    //         Residential
    //       </button>
    //       <button
    //         className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
    //         onClick={() => handleCategoryClick('hotels')}
    //       >
    //         Hotels
    //       </button>
    //       <button
    //         className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
    //         onClick={() => handleCategoryClick('industrial')}
    //       >
    //         Industrial
    //       </button>
    //       <button
    //         className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
    //         onClick={() => handleCategoryClick('institutional')}
    //       >
    //         Institutional
    //       </button>
    //       <button
    //         className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
    //         onClick={() => handleCategoryClick('pharmaceutical')}
    //       >
    //         Pharmaceutical
    //       </button>
    //       <button
    //         className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
    //         onClick={() => handleCategoryClick('religious')}
    //       >
    //         Religious
    //       </button>
    //       <button
    //         className='px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg'
    //         onClick={() => handleCategoryClick('villa')}
    //       >
    //         Villa
    //       </button>
    //     </div>
    //     <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    //       {filteredProjects.map((project, index) => (
    //         <div key={index} className='relative mb-4 md:mb-0'>
    //           <img
    //             src={project.image}
    //             alt={project.title}
    //             className='w-full h-auto object-cover rounded-3xl transition-opacity hover:opacity-60 cursor-pointer'
    //           />
    //           <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 hover:rounded-3xl transition-opacity cursor-pointer'>
    //             <div className='text-center' onClick={() => handleProjectClick(project)}>
    //               <h1 className='text-base md:text-xl font-bold'>{project.title}</h1>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     {selectedProject && (
    //       <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80'>
    //         <div className='bg-white p-4 rounded-lg w-full md:w-1/2'>
    //           <h1 className='text-base md:text-xl font-bold'>{selectedProject.title}</h1>
    //           <img className='rounded-lg w-full' src={selectedProject.image} alt='' />
    //           {/* <p>{selectedProject.description}</p> */}
    //           <button
    //             className='bg-red-500 text-white px-2 py-1 rounded-md mt-2'
    //             onClick={closeModal}
    //           >
    //             Close
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </section>
    // </div>
  );
};

export default Portfolio;
