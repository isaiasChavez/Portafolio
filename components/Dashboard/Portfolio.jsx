import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  return (
    <div className=' min-h-screen mx-5 md:mx-20 lg:mx-32 xl:mx-32 md:mb-32'>
     <div className='h-1/6 text-secondary  uppercase font-semibold flex flex-col justify-center items-center md:mb-10'>
          <h2 className='text-center text-2xl mb-8 md:mb-0'>my experience</h2>
          <span className='flex items-center '>
            ----
            <FontAwesomeIcon className="w-8 h-8 text-secondary text-2xl mx-4"  icon={faBriefcase} />
            ----
          </span>
        </div>
    <div className='h-16 flex justify-center items-center mb-5'>
        <button  className=" w-32 py-1 border-2 border-graycust text-secondary mr-2 font-semibold ">All </button>
        <button className=" w-32 py-1 text-white border-2 border-graycust mr-2 font-semibold">Web </button>
        <button className=" w-32 py-1 text-white border-2 border-graycust mr-2 font-semibold">Mobile </button>
      </div>
      <div className=' min-h-screen'>
     <div className='flex w-full flex-wrap justify-around'>
        <Card url="https://nostalgic-jepsen-ede386.netlify.app/"  urlImage="/assets/img/mern.png" />
        <Card url="https://product-hunt-5a2af.web.app/" urlImage="/assets/img/product-hunt.png" />
        <Card url="https://isaiaschavez.github.io/Simon-dice/" urlImage="/assets/img/simondice.png" />
        <Card url="https://pensive-boyd-2dfa18.netlify.app/" urlImage="/assets/img/suneita.png" />
        <Card url="https://cocky-torvalds-913f94.netlify.app/" urlImage="/assets/img/teko.png" />
        <Card url="https://isaiaschavez.github.io/Slice-App/" urlImage="/assets/img/slick.png" />
        <Card url="https://isaiaschavez.netlify.app/" urlImage="/assets/img/logo.png" />
        <Card url="https://nostalgic-jepsen-ede386.netlify.app/"  urlImage="/assets/img/juanpablo.png" />
      </div>
       </div>
    </div>
  )
}

const Card = ({urlImage,url}) => {
  return (

    <div className=' bg-white w-5/12 md:w-4/12 xl:w-3/12 m-1 mb-3 md:mb-0 md:m-10  flex justify-center items-center'>
        <a href={url} rel="noreferrer" target="_blank">
          
      <img src={ urlImage}/>
</a>
    </div>
  )
}
export default Portfolio
