import Image from 'next/image'
import boxYellow from '../../assets/images/svg/box-yellow.svg' 
import mapImage from '../../assets/images/map/map.svg'
import unitedState from '../../assets/images/map/united-states.svg'
import blueUnitedState from '../../assets/images/map/blue-united-states.svg'
import saudia from '../../assets/images/map/saudia-arabia.svg'
import blueSaudia from '../../assets/images/map/blueSaudiaArabia.svg'
import uae from '../../assets/images/map/uae.svg'
import blueUae from '../../assets/images/map/blueUae.svg'
import china from '../../assets/images/map/china.svg'
import blueChina from '../../assets/images/map/blueChina.svg'
import qatar from '../../assets/images/map/qatar.svg'
import blueQatar from '../../assets/images/map/blueQatar.svg'
import brandIcon from '../../assets/images/home/images/brand-icon-map.svg'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'

const Map = () => {
    const [saudiaImage,setSaudiaImage] = useState(saudia)
    const [chinaImage,setChinaImage] = useState(china)
    const [uaeImage,setUaeImage] = useState(uae)
    const [qatarImage,setQatarImage] = useState(qatar)
    const [unitedStateImage,setUnitedStateImage] = useState(unitedState) 

    const handleHover=(img,state)=>{
       
        switch (state) {
            case 'us':
                setUnitedStateImage(img)
                break;
            case 'qatar':
                setQatarImage(img)
                break;
            case 'china':
                setChinaImage(img)
                break;
            case 'saudia':
                setSaudiaImage(img)
                break;
            case 'uae':
                setUaeImage(img)
                break;
        
        }
    }

  return (
    <section className="flex relative items-center pt-20 pb-20  flex-col">
        <span className={styles.brandIconMap}>
            <Image src={brandIcon} alt='brandIcon'/>
        </span>
        <Image src={boxYellow} alt='yellow cube'/>
        <span className="text-blue medium-font text-3xl mt-2 relative z-10 uppercase">GLOBAL CARRIER NETWORK</span>
        <span className="medium-font text-black relative z-10">For Global Business Opportunity</span>
        <div className={`${styles.map}`}>
            <Image src={mapImage} alt='map'/>
            <Link href="#" >
                <a onMouseEnter={()=>handleHover(blueUnitedState,'us')} id='us' onMouseLeave={()=>handleHover(unitedState,'us')} className={styles.us} >
                    <Image src={unitedStateImage}/>
                </a>
            </Link>
            <Link href="#">
                <a  onMouseEnter={()=>handleHover(blueSaudia,'saudia')} id='saudia'  onMouseLeave={()=>handleHover(saudia,'saudia')} className={styles.saudia}>
                    <Image src={saudiaImage}/>
                </a>
            </Link>
            <Link  href="#">
                <a  onMouseEnter={()=>handleHover(blueUae,'uae')}  id='uae' onMouseLeave={()=>handleHover(uae,'uae')} className={styles.uae}>
                    <Image src={uaeImage}/>
                </a>
            </Link>
            <Link  href="#">
                <a  onMouseEnter={()=>handleHover(blueChina,'china')} id='china'  onMouseLeave={()=>handleHover(china,'china')} className={styles.china}>
                    <Image src={chinaImage}/>
                </a>
            </Link>
            <Link  href="#">
                <a  onMouseEnter={()=>handleHover(blueQatar,'qatar')} id='qatar'  onMouseLeave={()=>handleHover(qatar,'qatar')} className={styles.qatar}>
                    <Image src={qatarImage}/>
                </a>
            </Link>
        </div>
    </section>
  )
}

export default Map