import Image from 'next/image'
import banner from '../../assets/images/home/banner/home-banner.jpg'
import styles from '../../styles/Home.module.css'
import overlays from '../../styles/Overlays.module.css'
import Link from 'next/link'


const Hero = () => {
  return (
        <section className={`flex items-center  justify-start ${styles.heroSection}`}>
            <span className={`img_container ${styles.heroImg}`}>
                <Image src={banner} layout='responsive' alt='Delivered'/>
            </span>
            <span className={`absolute   ${overlays.heroTop} `}>
                
            </span>
            <span className={`absolute   ${overlays.heroTop2} `}>
                
            </span>
            <span className={`absolute   ${overlays.heroBottomBlue} `}>
                
            </span>
           <div className="container text-white relative ">
                <h1 className='text-4xl medium-font w-2/5'>
                AFFORDABLE, SIMPLIFIED SHIPPING AND LOGISTICS
                </h1>
                <p className='light-font w-1/3 mt-2 mb-8'>
                Discover what our Saudi integrity and global capacity can do for your bottom line
                </p>
                <Link href="#" >
                    <a className='w-36 h-10 flex justify-center rounded items-center border-2  transition-all duration-300 border-yellow medium-font  hover:bg-yellow hover:text-grey'>
                      Learn More
                    </a>
                </Link>
            </div>
        </section>
  )
}

export default Hero