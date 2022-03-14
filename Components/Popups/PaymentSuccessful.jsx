import Modal from './Modal'
import whiteStar from '../../assets/images/svg/white-star.svg'
import yellowStar from '../../assets/images/svg/golden-star.svg'
import tick from '../../assets/images/svg/tick.svg'
import Image from 'next/image'

const PaymentSuccessful = () => {
   
  return (
    <Modal py='pt-11 pb-20' modalId='paymentSuccessful'>
            <h4 className="text-3xl text-blue medium-font mb-2">Payment Successful!</h4>
            <span className="text-lg text-grey light-font mb-1">Your tracking number is </span>
            <span className='bold-font text-xl text-yellow'>192311532660</span>    
            <div className='flex gap-x-1.5 mt-12'>
                
                <Image src={yellowStar}/>
                <Image src={yellowStar}/>
                <Image src={yellowStar}/>
                <Image src={whiteStar}/>
                <Image src={whiteStar}/>
                
            </div> 
            
            <span className="text-lg text-grey light-font mt-2 mb-12">How would you rate your experience? </span>
            <div className='flex gap-x-4'>
                  
            <button className='w-48 h-10 rounded  pt-0.5  medium-font  text-grey border border-yellow'>
                       Download Invoice
            </button>
            <button className='w-48 h-10 rounded  pt-0.5  medium-font shadow text-grey bg-yellow'>
                        My Shipments
            </button>
            </div> 
        <div className="mb-2.5"></div>
    </Modal>
        
       
  )
}

export default PaymentSuccessful