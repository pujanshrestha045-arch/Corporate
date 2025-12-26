import React from 'react'

function Footer() {

    const currentYear = new Date().getFullYear()
    return (
        <>
            <footer className='border-t '>
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-4">
                        <div >
                            <h3 className='text-lg font-semibold'>
                                Corporate
                            </h3>
                            <p className='mt-4 text-sm'>
                                Empowering businesses through strategic innovation and sustainable growth.
                            </p>
                        </div>
                        <div>
                            <h4 className='text-sm font-semibold'>Company</h4>
                            <ul className='mt-4 space-y-2'>
                                <li>
                                    <a href="#" className='text-sm'>About Us</a>
                                </li>

                                <li>
                                    <a href="#" className='text-sm'>Careers</a>
                                </li>

                                <li>
                                    <a href="#" className='text-sm'>Services</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className='text-sm font-semibold'>Resources</h4>
                            <ul className='mt-4 space-y-2'>
                                <li>
                                    <a href="#" className='text-sm'>Blog</a>
                                </li>

                                <li>
                                    <a href="#" className='text-sm'>Documentation</a>
                                </li>

                                <li>
                                    <a href="#" className='text-sm'>Support</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className='text-sm font-semibold'>Connect</h4>
                            <div className='mt-4 flex gap-4'>                                
                                    <a href="#" className=''>Li</a>
                                    <a href="#" className=''>X</a>
                                    <a href="#" className=''>GH</a>
                                    <a href="#" className=''>M</a>                          
                            </div>
                        </div>

                        <div className="mt-8 border-t pt-8 text-center text-sm">
                            <p>{currentYear}Corporate. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
