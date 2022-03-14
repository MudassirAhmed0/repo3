import styles from '../../styles/Home.module.css'
import layoutStyles from '../../styles/Layout.module.css' 

const Track = () => {
  return (
    <div className={styles.track}>
       <div className="grow flex flex-col justify-center">
               <div className={`flex`}>
                 <div className={` ${layoutStyles.newsletter} ${layoutStyles.track}`}>
                  <input type="text"   placeholder='sa' name='track' id='track'/>
                  <label htmlFor="track">Tracking Number</label>
                 </div> 
                 <button className='w-32 border border-white rounded text-grey bg-white  hover:tracking-wider transition-all transition-all duration-300 medium-font  shadow-md hover:bg-white hover:text-blue'>
                  Track
                 </button>
                </div>
            </div>
    </div>
  )
}

export default Track