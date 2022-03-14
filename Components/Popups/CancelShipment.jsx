import Modal from './Modal'

const CancelShipment = () => {
    const cancel =()=>{
        let modal =   document.getElementById("cancelShipment")
        modal.classList.remove('opacity-1')
        modal.classList.add('opacity-0')
        modal.classList.remove('pointer-events-auto')
        modal.classList.add('pointer-events-none')
    }
  return (
    <Modal py='pt-11 pb-12' modalId='cancelShipment'>
    <h4 className="text-3xl text-blue medium-font mb-2">Cancel Your Shipment</h4>
    <div className="px-11 w-full mb-14 pb-1 mt-14 pt-1">
        <div className='mobileNumberInput'>
            <input type="text" placeholder='reason'/>
            <label htmlFor="Reason">Reason</label>
        </div>
        <div className='cancelConfirmation mt-3.5  flex'>
            <input type="checkbox" id='cancelConfirmation' name='cancelConfirmation' className='peer hidden' />
            <label htmlFor="cancelConfirmation" className='light-font text-lg flex gap-x-2.5 items-center peer-checked:after:content-["\2714\0020"] after:absolute after:text-xs after:ml-1 text-grey before:mb-0.5 before:border-grey before:border before:content-["  "] before:block before:h-4 before:w-4 before:bg-yellow before:rounded-sm '>Send a confirmation of order cancellation via email</label>
        </div>
    </div>
   <div className='flex gap-x-5 justify-end w-full px-11'>
        <button  onClick={cancel} className='w-32 h-10 rounded  pt-0.5   border border-yellow text-grey '>
                    Cancel
        </button>
        <button  className='w-32 h-10 rounded  pt-0.5   shadow text-grey bg-yellow'>
                    Submit
        </button>
   </div>
</Modal>
  )
}

export default CancelShipment