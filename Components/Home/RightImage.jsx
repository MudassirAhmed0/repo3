import Image from "next/image"
import styles from '../../styles/Home.module.css'
import delivered from '../../assets/NewImages/index/image/delivered.jpg' 
import yellowCube from '../../assets/NewImages/svg/box-yellow.svg'

const RightImage = () => {
  return (
    <div className="flex pl-20 pr-20 pt-44 items-center justify-between gap-x-16">
        <div className={`rounded  relative overflow-hidden   ${styles.rightImage}`}>
            <Image src={delivered} alt='Delivered' />
        </div>
        <div className="flex flex-col justify-center items-start gap-y-3 ml-8">
            <Image src={yellowCube} alt='Cube Icon'/>
            <h4 className="text-3xl medium-font text-grey">
            We Are Built To Say, <span className="text-blue bold-font">“YES DELIVERED”</span> to Your   Business & Logistics Needs
            </h4>
            <p className="light-font text-grey">
            From humble beginnings as the first private Saudi postal company, Zajil Express is now a very large company with global reach and the pride of Saudi entrepreneurship. More than 500 corporate clients count on Zajil to keep their goods – and their businesses – in motion with streamlined shipping services.
            </p>
        </div>
    </div>
  )
}

export default RightImage