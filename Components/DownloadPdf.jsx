import Image from 'next/image'
import Layout from "../styles2/Layout.module.css"
import download from '../assets/images2/svg/DOWNLOAD.svg'

const DownloadPdf = () => {
    return (
        <>
            <section className={`${Layout.w86} w-11/12 mx-auto mt-10 relative`}>
                <h4 className='text-lg text-white medium-font'>Related Downloads</h4>
                <div className='flex justify-between mt-3'>
                    <div className={`flex items-center cursor-pointer justify-center gap-x-3 ${Layout.DownloadPdf}`}>
                        <div>
                            <span>
                                <Image src={download} alt='Download' />
                            </span>
                            <p className='text-xs text-yellow light-font'>PDF</p>
                        </div>
                        <div>
                            <h5 className='text-lg text-white '>Document Title</h5>
                            <p className='text-sm text-white'>23.8mb</p>
                        </div>
                    </div>
                    <div className={`flex items-center cursor-pointer justify-center gap-x-3 ${Layout.DownloadPdf}`}>
                        <div>
                            <span>
                                <Image src={download} alt='Download' />
                            </span>
                            <p className='text-xs text-yellow light-font'>PDF</p>
                        </div>
                        <div>
                            <h5 className='text-lg text-white '>Document Title</h5>
                            <p className='text-sm text-white'>23.8mb</p>
                        </div>
                    </div>
                    <div className={`flex items-center cursor-pointer justify-center gap-x-3 ${Layout.DownloadPdf}`}>
                        <div>
                            <span>
                                <Image src={download} alt='Download' />
                            </span>
                            <p className='text-xs text-yellow light-font'>PDF</p>
                        </div>
                        <div>
                            <h5 className='text-lg text-white '>Document Title</h5>
                            <p className='text-sm text-white'>23.8mb</p>
                        </div>
                    </div>
                    <div className={`flex items-center cursor-pointer justify-center gap-x-3 ${Layout.DownloadPdf}`}>
                        <div>
                            <span>
                                <Image src={download} alt='Download' />
                            </span>
                            <p className='text-xs text-yellow light-font'>PDF</p>
                        </div>
                        <div>
                            <h5 className='text-lg text-white '>Document Title</h5>
                            <p className='text-sm text-white'>23.8mb</p>
                        </div>
                    </div>
                    <div className={`flex items-center cursor-pointer justify-center gap-x-3 ${Layout.DownloadPdf}`}>
                        <div>
                            <span>
                                <Image src={download} alt='Download' />
                            </span>
                            <p className='text-xs text-yellow light-font'>PDF</p>
                        </div>
                        <div>
                            <h5 className='text-lg text-white '>Document Title</h5>
                            <p className='text-sm text-white'>23.8mb</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className={Layout.borderPdf}>

            </div>
        </>
    )
}

export default DownloadPdf