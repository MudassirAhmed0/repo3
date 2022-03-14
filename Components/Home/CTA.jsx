import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import overlays from '../../styles/Overlays.module.css'

const CTA = () => {
  return (
    <div className={`pt-8 pb-8 pr-11 pl-11 bg-yellow relative overflow-hidden  ${styles.cta}	`}>
<span className={overlays.logisticsOverlay}></span>
       <h4 className="text-grey text-4xl mb-1 medium-font relative">
       Expand Your Business with Zajil   
        </h4> 
        <p className="text-lg text-grey light-font mb-12 relative ">Talk to a KSA shipping and logistics expert at Zajil today.</p>
        <Link href='#' >
            <a  className='w-36 h-10   rounded-md  transition-all duration-300  hover:tracking-wider  relative medium-font text-grey  shadow-md  hover:shadow-shadaw flex justify-center bg-white items-center hover:text-blue'>
                    Learn More

            </a>
        </Link>
    </div>
  )
}

export default CTA