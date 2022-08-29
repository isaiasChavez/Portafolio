import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
const Fade = require("react-reveal/Fade");

import styles from "./styles.module.css";
import React,{useImperativeHandle, useState} from "react";
export interface ImageViewerProps {
  images:string [],
  imageSelected:string,
}

export interface ImageViewerRef {
  open:(newRoute:string) =>void,
}

const ImageViewer = React.forwardRef<any, ImageViewerProps>((props:ImageViewerProps,ref) => {

  const {images, imageSelected} =  props
  
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentImage, setCurrentImage] = useState(images[0])

  useImperativeHandle(ref, () => ({
    open(currentImage:string) {
       console.log({currentImage})
       const index:number =  images.findIndex(url=> url === currentImage)
       setCurrentIndex(index)
       setCurrentImage(images[index])
       setIsVisible(true)
    },
  }))

  function onClose(){
    setIsVisible(false)
  }

  const nextImage = ()=>{ 
    if (currentIndex === images.length - 1) {
      setCurrentImage(images[0])
    setCurrentIndex(0)
    }else{ 
      setCurrentImage(images[currentIndex + 1])
      setCurrentIndex(currentIndex+1)
    }
  }
  const backImage = ()=>{
    if (currentIndex === 0) {
      setCurrentImage(images[images.length - 1])
    setCurrentIndex(images.length - 1)
    }else{ 
      setCurrentImage(images[currentIndex - 1])
      setCurrentIndex(currentIndex-1)
    }
  }

  if (!isVisible) {
    return null
  }
  return (
    <Fade>
    <div className={styles.imageViewer}>
       <FontAwesomeIcon onClick={onClose} className={`pushup_animation ${styles.exit}`} color="#fa9b1b" size="2x" icon={faCircleXmark} />
      <div className={` ${styles.topSection}` } onClick={onClose}>
        <img className={styles.image} src={currentImage} alt="" />
      </div>
      { images.length>1 && <div className={` ${styles.bottomSection}`}>
        <div className={` ${styles.centerButtons}  `}>
          <button onClick={backImage}>
            <FontAwesomeIcon  className="pushup_animation" color="#fa9b1b" size="3x" icon={faArrowLeft} />
          </button>

          <button onClick={nextImage}>
            <FontAwesomeIcon className="pushup_animation" color="#fa9b1b" size="3x" icon={faArrowRight}  />
          </button>
        </div>
      </div>}
    </div>
    </Fade>
  );
});

ImageViewer.displayName = 'ImageViewer';


export default ImageViewer;
