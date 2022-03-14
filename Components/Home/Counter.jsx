import styles from '../../styles/Home.module.css'
import overlay from '../../styles/Overlays.module.css'
import Image from 'next/image'
import cube from '../../assets/images/svg/box-white.svg'
import CountUp from 'react-countup';

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

const Counter = () => {
  const [startCounter,setStartCounter] = useState(false)

  return ( 
    <section className={`  relative  ${styles.videoSection}  mt-24`}>
      <span className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video src="/video.mp4" autoPlay loop muted  className='block'></video>  
      </span>
        <span className={`bg-cardTopYellow ${styles.yellowTop}`}></span>
        <span className={`bg-cardTopYellow ${styles.yellowBottom}`}></span>
      <div className={`relative  flex justify-between flex-col pt-16 pb-16 ${styles.videoContinaer}`}>
        <span className={overlay.videoTopOverlay}></span>
        <span className={overlay.videoTopOverlay2}></span>
        <span className={overlay.videoBottomOverlay}></span>
        <div className="flex justify-center relative gap-y-3 flex-col items-center">
          <Image  src={cube} alt='cube'/> 
          <h4 className="text-3xl text-yellow medium-font">
            YES DELIVERED  
          </h4> 
        </div>
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }} >
        {({isVisible})=>{
          if(isVisible){
            setStartCounter(true)
          }
        return(<div className={`flex justify-between text-white relative ${styles.counter}` }>
          <div className={`flex flex-col ${styles.counterItem}`}>
            <span className="text-5xl bold-font">
            {startCounter &&  <CountUp duration={3} end={7}/>}
            {startCounter && "M+"}
            </span>
            <span className="text-offWhite">
              Active Clients
            </span>            
          </div>
          <div className={`flex flex-col ${styles.counterItem}`}>
            <span className="text-5xl bold-font">
         {startCounter &&   <CountUp duration={3} end={396}/>}
            </span>
            <span className="text-offWhite">
            Courier Vans
            </span>            
          </div>
          <div className={`flex flex-col ${styles.counterItem}`}>
            <span className="text-5xl bold-font">
          {startCounter &&  <CountUp duration={3} end={500}/>}{startCounter && "+"}
            </span>
            <span className="text-offWhite">
            Corporate Clients
            </span>            
          </div>
          <div className={`flex flex-col ${styles.counterItem}`}>
            <span className="text-5xl bold-font">
        {startCounter &&    <CountUp duration={3} end={1055}/>}
            </span>
            <span className="text-offWhite">
            Employees
            </span>            
          </div>
          <div className={`flex flex-col ${styles.counterItem}`}>
            <span className="text-5xl bold-font">
              117
            </span>
            <span className="text-offWhite">
            KSA Branches
            </span>            
          </div>
        </div>)}}
        </VisibilitySensor>
      </div>
    </section>
  )
}

export default Counter