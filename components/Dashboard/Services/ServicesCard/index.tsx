import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from 'react-reveal/Fade';

interface ServicesCardProps {
    icono:IconProp;
    title:string;
    description:string | React.ReactNode; 
}
 
const ServicesCard: React.FC<ServicesCardProps> = ({ icono, title,description }) => {

    return (
        <Fade>

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
        </Fade>
      )
}
 
export default ServicesCard;

  