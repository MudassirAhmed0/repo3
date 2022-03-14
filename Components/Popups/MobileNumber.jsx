import React from 'react'
import Modal from './Modal'

const MobileNumber = () => {
  return (
    <Modal py='pt-12 pb-16' modalId='mobileNumber'>
            <h4 className="text-3xl text-blue medium-font mb-2">Enter Your Mobile Number</h4>
            <span className="text-lg text-grey light-font mb-1">Please provide your mobile number to retrieve your current shipment</span>
            <div className="px-11 w-full mb-14 pb-1 mt-14 pt-1">
                <div className='mobileNumberInput'>
                    <input type="text" placeholder='+966 xxx xxx xxx'/>
                    <label htmlFor="Mobile Number">Mobie Number</label>
                </div>
            </div>
            <button  className='w-48 h-10 rounded  pt-0.5  medium-font shadow text-grey bg-yellow'>
                        Send The Code
            </button>
        <div className="mb-2.5"></div>
    </Modal>
  )
}

export default MobileNumber