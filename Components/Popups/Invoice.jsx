import masterCard from '../../assets/images/png files/master.png'
import visaCard from '../../assets/images/png files/visa.png'
import Image from 'next/image'
import ShipmentTextInput from '../Shipment/ShipmentTextInput' 
import Modal from './Modal'
import PaymentSuccessful from './PaymentSuccessful'

const Invoice = () => {
    const handlePay =()=>{
        const invoiceModal = document.getElementById('invoiceModal')
        invoiceModal.classList.remove('opacity-1') 
        invoiceModal.classList.remove('pointer-events-auto')
        invoiceModal.classList.add('opacity-0') 
        invoiceModal.classList.add('pointer-events-none')
        
        const modal = document.getElementById('paymentSuccessful')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    } 
    return (
      <>
    <Modal py='pt-11 pb-20' modalId='invoiceModal'>
            <h4 className="text-3xl text-blue medium-font mb-2">Pay Invoice</h4>
            <span className="text-lg text-grey light-font mb-1">Credit Card Information</span>
            <div className='flex gap-x-1'>
                <Image src={masterCard} alt='Master Card'/>
                <Image src={visaCard} alt='Visa Card'/>
            </div>
            <div className="w-7/12 flex flex-col mt-12 mb-12">
                <div>
                    <ShipmentTextInput label='Card Holder Name' fontMedium/>
                </div>
                <div className='flex gap-x-6 mt-7 '>
                    <div className='w-5/12'>
                        <ShipmentTextInput label='Card Number' fontMedium/>
                    </div>
                    <div className='w-4/12'>
                        <ShipmentTextInput label='Expiry' fontMedium/>
                    </div>
                    <div className='w-3/12'>
                        <ShipmentTextInput label='CVC' fontMedium/>
                    </div>
                </div>
                
            </div>
            <button onClick={handlePay} className='w-48 h-10 rounded  pt-0.5  medium-font shadow text-grey bg-yellow'>
                        Pay Now 
            </button>
        <div className="mb-2.5"></div>
    </Modal>
    
    <PaymentSuccessful/>
    </>
        
       
  )
}

export default Invoice