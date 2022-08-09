import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import Zoom  from 'react-reveal/Zoom'

const Skills = () => {
  return (
    <div className=' min-h-screen md:mx-20 lg:mx-32 xl:mx-32 '>
       <div className='h-1/6 text-secondary  uppercase font-semibold flex flex-col justify-center items-center md:mb-10'>
          <h2 className='text-center text-2xl mb-8 md:mb-0'>Skills</h2>
          <span className='flex items-center '>
            ----
            <FontAwesomeIcon className='mx-4' className="w-8 h-8 text-secondary text-2xl mx-4"  icon={faCogs} />
            ----
          </span>
        </div>
      <div className='min-h-screen flex flex-wrap  '>
        <Skill name='HTML' />
        <Skill name='Java Script' />
        <Skill name='NestJs' />
        <Skill name='MongoDB' />
        <Skill name='React Native' />
        <Skill name='CSS' />
        <Skill name='NGINX' />
        <Skill name='Bootstrap' />
        <Skill name='TailwindCSS' />
        <Skill name='AntDesign' />
        <Skill name='Responsive Design' />
        <Skill name='ReactJS' />
        <Skill name='VueJS' />
        <Skill name='NuxtJS' />
        <Skill name='NextJS' />
        <Skill name='ECMAScript 6+' />
        <Skill name='Git y Github' />
        <Skill name='Digital Ocean' />
      </div> 
    </div>
  )
}

const Skill = ({ name }) => {
  return (
    <div className='w-3/12  md:w-4/12 xl:w-2/12 flex justify-center items-center '>
      <Zoom>

      <h3 className='text-xs md:text-2xl text-center font-semibold text-white'>{name}</h3>
      </Zoom>
    </div>
  )
}
export default Skills
