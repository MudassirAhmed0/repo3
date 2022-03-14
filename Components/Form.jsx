import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles2/Ecommerce.module.css'
import overlays from '../styles2/Overlays.module.css'
import layoutStyles from '../styles2/Layout.module.css'
import whiteBox from '../assets/images2/svg/box-white.svg'
import { useState } from 'react/cjs/react.development'

const Form = () => {
    const [state,setState] =useState({
        email:'',
        firstName:'',
        lastName:'',
        country:'',
        yourCompany:'',
        mobileNumber:'',  
    })
    const [emailError,setEmailError] =useState(false)
    const [firstNameError,setFirstNameError] =useState(false)
    const [lastNameError,setLastNameError] =useState(false)
    const [countryError,setCountryError] =useState(false)
    const [yourCompanyError,setYourCompanyError] =useState(false)  
    const [mobileNumberError,setMobileNumberError] =useState(false)
    const handleChange =(e)=>{ 
        setState(()=>{
                return {
                    ...state,
                    [e.target.id]:e.target.value
                }
            })
    }
    const handleSubmit =()=>{
        const {email,firstName,lastName,country,yourCompany,mobileNumber} = state
        setEmailError( email =='')
        setFirstNameError( firstName=='')
        setLastNameError( firstName=='')
        setCountryError(country=='')
        setYourCompanyError( yourCompany=='') 
        setMobileNumberError( mobileNumber=='') 
        if(email && firstName && country && yourCompany && mobileNumber  && lastName){
            alert("Form Submitted")
        }
        setTimeout(()=>{
            setEmailError( false)
            setFirstNameError( false)
            setLastNameError( false)
            setCountryError(false)
            setYourCompanyError( false) 
            setMobileNumberError( false) 
        },5000)
    }
    return ( 
        <div className={`relative  ${styles.yellowBack}`}>
            <span className={`${overlays.logisticsOverlay} rounded-b-xl`}></span>
            <div className='py-56 pt-24 relative'>
                <div className='flex justify-center flex-col items-center'>
                    <span>
                        <Image src={whiteBox} alt="Yellow Box" />
                    </span>
                    <h2 className='text-3xl medium-font text-grey mt-2 text-center'>Get Started Now with Zajil <br /> Ecommerce Solutions</h2>
                    <p className='text-lg light-font text-grey mt-2 text-center'>Submit Your Business Profile to get contacted by Zajil representative</p>
                </div>
                <div className={`mx-auto mt-10 ${styles.w64}`}>
                    <div className='flex justify-between'>
                        <div className={`mt-7  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`} >
                            <input onChange={handleChange} value={state.firstName} type="text" placeholder='Full Name' name='firstName' id='firstName' />
                            <label htmlFor="firstName">First Name</label>
                           { firstNameError && <span className='text-red-500'>This field is required.</span>}
                        </div>
                        <div className={`mt-7  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`} >
                            <input onChange={handleChange} value={state.lastName} type="text" placeholder='Last Name' name='lastName' id='lastName' />
                            <label htmlFor="lastName">Last Name</label>
                           { lastNameError && <span className='text-red-500'>This field is required.</span>}
                        </div>
                    </div>
                    <div className='mt-7 flex justify-between'>
                        <div className={`mt-7  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`} >
                            <input onChange={handleChange} value={state.yourCompany} type="text" placeholder='Your Company' name='yourCompany' id='yourCompany' />
                            <label htmlFor="yourCompany">Your Company</label>
                           { yourCompanyError && <span className='text-red-500'>This field is required.</span>}
                        </div>
                        <div className={`mt-7  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`} >
                            <input onChange={handleChange} value={state.emailAddress} type="email" placeholder='Email Address' name='email' id='email' />
                            <label htmlFor="email">Email Address</label>
                           { emailError && <span className='text-red-500'>This field is required.</span>}
                        </div>
                    </div>
                    <div className='mt-7 flex justify-between'>
                        <div className={`mt-7  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`} >
                            <input onChange={handleChange} value={state.mobileNumber} type="phone" placeholder='Mobile Number' name='mobileNumber' id='mobileNumber' />
                            <label htmlFor="mobileNumber">Mobile Number</label>
                           { mobileNumberError && <span className='text-red-500'>This field is required.</span>}
                        </div>
                        <div className={`mt-7  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`} >
                            <input onChange={handleChange} value={state.country} type="text" placeholder='Country' name='country' id='country' />
                            <label htmlFor="country">Country</label>
                           { countryError && <span className='text-red-500'>This field is required.</span>}
                        </div>
                    </div> 
                        <button onClick={handleSubmit} className='mt-20 mx-auto w-36 h-10 flex justify-center rounded items-center border-2 bg-white  medium-font hover:text-blue'>
                            Submit
                        </button> 
                </div>
            </div>
        </div>
    )
}

export default Form