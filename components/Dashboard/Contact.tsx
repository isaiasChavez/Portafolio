import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faIdCard,
  faMapMarkerAlt,
  faMailBulk,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons'
import { Element} from 'react-scroll'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
interface ContactProps {
}


const Contact:React.FC<ContactProps> = () => {


  const isShowFields = {
    name: "",
    email: "",
    subject: "",
    message:""
  }
  const [ showFields, setShowFields ] = useState( isShowFields )
  
  
  const onFocus = (e:any) => {
    console.log( e.target.name );
    console.log({showFields});
    setShowFields( {
      ...isShowFields,
      [e.target.name]:"activeFieldContact"
    } )
  }
  return (
    <Element name='contact' id="contact" className='  md:mx-20 lg:mx-32 xl:mx-64 '>
      <div className='h-1/6 text-secondary  uppercase font-semibold flex flex-col justify-center items-center md:mb-10'>
        <h2 className='text-center text-2xl mb-8 md:mb-0'>Contact me</h2>
        <span className='flex items-center '>
          ----
          <FontAwesomeIcon className="w-8 h-8 text-secondary text-2xl mx-4"  icon={faIdCard} />
          ----
        </span>
      </div>
      <div className='lg:h-64 flex justify-center items-center flex-wrap md:flex-nowrap py-10'>
        <Card
          icono={faMapMarkerAlt}
          title='Location'
          subtitle='Oaxaca, México'
        />
        <Card
          icono={faMailBulk}
          title='Email'
          subtitle='isaiaschavez.co@gmail.com'
        />
        <Card icono={faPhoneAlt} title='Phone' subtitle='+52 9511212436' />
        <div></div>
      </div>
      <div className=' flex flex-wrap mx-5 md:mx-0 bg-darked-900  rounded shadow-lg'>
        <form name="contact" method="POST" data-netlify="true" className='w-full  h-full darked-900 p-10'>
          <div className='w-full  relative flex justify-center items-center h-14 '>
            <input type="hidden" name="contact" value="contact"/>

            <input
              type='text'
              name="name"
              className='w-full bg-transparent border-b-2 h-full 	text-white'
              onFocus={onFocus}
            />
            <span className={`absolute duration-500	 top-0 left-0 text-graycust text-bold ${showFields.name} `} >
              Name
            </span>
          </div>
          <div className='w-full mt-8 relative flex justify-center items-center h-14 '>
            <input
              name="email"
              type='email'
              onFocus={onFocus}
              className='w-full bg-transparent border-b-2 h-full  text-white	'
            />
            <span className={`absolute left-0 duration-500	 top-0 text-graycust text-bold ${showFields.email}`}>
              Email
            </span>
          </div>
          <div className='w-full mt-8 relative flex justify-center items-center h-14 '>
            <input
              name="subject"
              type='text'
              onFocus={onFocus}
              className='w-full bg-transparent border-b-2 h-full 	text-white'
            />
            <span className={`absolute left-0 duration-500	  top-0 text-graycust text-bold ${showFields.subject}`}>
              Subject
            </span>
          </div>
          <div className='w-full mt-20 relative flex justify-center items-center h-56 '>
            <textarea
              name="message"
              onFocus={onFocus}
              className=' w-full bg-transparent border-b-2 h-full text-white'
              rows={3}
            ></textarea>

            <span className={`absolute left-0 top-0  duration-500 text-graycust text-bold ${showFields.message} `}>
              Your message
            </span>
          </div>
          <div className='w-full mt-8 relative flex 	 items-center h-14 '>
            <button
              type='submit'
              className='uppercase text-md  border-yellow-400 hover:opacity-75 border-2 py-3 px-5 text-secondary'
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </Element>
  )
}

const Card = ({ title, subtitle, icono }:{title:string,subtitle:string,icono:IconProp}) => {
  return (
    <div className='h-full  w-full p-5 flex justify-center items-center'>
      <div className=' flex w-full h-full flex-col items-center justify-center'>
        <div className='h-1/6 text-center mb-4'>
          {' '}
          <FontAwesomeIcon  className="text-secondary mx-4 w-8 h-8 text-secondary text-2xl mx-4"  icon={icono} />{' '}
        </div>
        <div className='h-5/6 flex flex-col items-center text-white'>
          <h4 className=' uppercase font-semibold text-lg'> {title} </h4>
          <p className='text-sm mt-3'>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
export default Contact
