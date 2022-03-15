import styles from '../../styles/Layout.module.css' 
import logo from '../../assets/NewImages/svg/logofooter.svg'
import Image from 'next/image'
import Link from 'next/link'
import playStoreIcon from '../../assets/NewImages/png-files/playstoreWhite.png'
import appStoreIcon from '../../assets/NewImages/png-files/appstoreWhite.png'

const Footer = () => {
  return (
    <footer className={`pt-12 ${styles.footerFluid}`}>
      <div className={styles.footer}>
        <div className="flex w-full">
          <Link href="/" >
           <a className={`w-1/6 ${styles.footerLogo}`}>
              <Image src={logo} alt="Zajil Logo"/>  
            </a>
          </Link>
          <ul className='medium-font text-white flex flex-col gap-y-4 w-1/6'>
            <li>
              <Link href='/about'>
                  <a>
                    About Us
                  </a>
              </Link>
            </li>
            <li>
              <Link href='/mediacenter'>
                  <a>
                    Media Center
                  </a>
              </Link>
            </li>
            <li>
              <Link href='/theapp'>
                  <a>
                    Mobile App
                  </a>
              </Link>
            </li>
          </ul>
          <ul className='medium-font text-white flex flex-col gap-y-4 w-1/6'>
            <li>
              <Link href='/contact'>
                  <a>
                    Contact Us
                  </a>
              </Link>
            </li>
            <li>
              <Link href='/career'>
                  <a>
                    Careers
                  </a>
              </Link>
            </li>
            <li>
              <Link href='/developertools'>
                  <a>
                    Developers Tools
                  </a>
              </Link>
            </li>
          </ul>
          <ul className='medium-font text-white flex flex-col gap-y-4 w-1/6'>
            <li>
              <Link href='/terms'>
                  <a>
                   Terms of Use
                  </a>
              </Link>
            </li>
            <li>
              <Link href='/privacy-policy'>
                  <a>
                    Privacy Policy
                  </a>
              </Link>
            </li>
            <li>
              <Link href='/faqs'>
                  <a>
                    FAQs
                  </a>
              </Link>
            </li>
          </ul>
          <div className="grow flex flex-col justify-center">
               <div className={`flex`}>
                 <div className={`light-font ${styles.newsletter}`}>
                  <input type="text"   placeholder='sds' name='newsletter' id='newsletter'/>
                  <label htmlFor="newsletter">Subscribe to Newsletter</label>
                 </div> 
                 <button className='w-32 border shadow-md border-white rounded text-white medium-font '>
                   Submit
                 </button>
                </div>
            </div>
        </div>
          </div>  
          <div className={styles.footerDivider}>

          </div> 
          <div className={`flex justify-between items-center text-white pb-4 text-sm ${styles.footer}`}>
                <div className='flex gap-x-14'>
                  <span>
                  © 2021 Zajil Express. All rights reserved.
                  </span>
                  <span>
                  Developed by Brackets Technology
                  </span>
                </div>
                <div className='flex items-center gap-x-5 '>
              <Image src={appStoreIcon} alt='App Store Icon'/>
              <Image src={playStoreIcon} alt='Play Store Icon'/>
               </div>
             
          </div>
    </footer>
  )
}

export default Footer