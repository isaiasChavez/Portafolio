import React from 'react'
import {
  faAddressCard,
  faServer,
  faPen,
  faFlag,
  faCode,
  faInfo,
  faG
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services () {
  return (
    <div className='  w-full bg-darked-900  py-10'>
      <div className='h-1/6 text-secondary  uppercase font-semibold flex flex-col justify-center items-center '>
        <h2 className='text-center text-2xl mb-8 md:mb-4'>Services</h2>
        <span className='flex items-center '>
          ----
          <FontAwesomeIcon
            className='w-8 h-8 text-secondary text-2xl mx-4'
            icon={faServer}
          />
          ----
        </span>
      </div>
      <div className='h-5/6 w-full flex justify-around flex-wrap mt-8'>
        <Card icono={faPen} title='FrontEnd' description={<>I architect and develop websites and <br /> applications using web technologies</>} />
        <Card icono={faFlag} title='Backend' description={<>I can build and maintain the mechanisms that process <br/> data and perform actions on websites</>}/>
        <Card icono={faCode} title='Mobile Apps' description={<>I can build apps for Google’s Android,<br/> Apple’s iOS with react native.</>}/>
        <Card icono={faG} title='Google Analytics' description={<>Familiarity with Google Cloud Data and Analytics </>}/>
      </div>
    </div>
  )
}

const Card = ({ icono, title,description }) => {
  return (
    <div className='h-full  w-full md:w-6/12 md:h-3/6 p-5 flex justify-center items-center'>
        <div className=' flex w-full h-full flex-col items-center justify-center'>
          <div className='h-1/6 text-center mb-4 md:mb-8'>
            {' '}
            <FontAwesomeIcon
              className='w-8 h-8 text-secondary text-2xl mx-4'
              icon={icono}
            />{' '}
          </div>
          <div className='h-5/6 flex flex-col items-center text-white'>
            <h4 className=' uppercase font-semibold text-xl mb-5'>{title}</h4>
            <p className='text-xs uppercase text-center'>{description}</p>
          </div>
        </div>
    </div>
  )
}
