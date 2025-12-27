import React from 'react'
import { Linkedin, Github, X, Mail } from 'lucide-react'

function Footer() {

    const currentYear = new Date().getFullYear()
    return (
        <>
            <footer className='border-t border-border bg-secondary text-secondary-foreground'>
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-4">
                        <div >
                            <h3 className='text-lg font-semibold'>
                                Corporate
                            </h3>
                            <p className='mt-4 text-sm text-muted-foreground'>
                                Empowering businesses through strategic innovation and sustainable growth.
                            </p>
                        </div>
                        <div>
                            <h4 className='text-sm font-semibold'>Company</h4>
                            <ul className='mt-4 space-y-2'>
                                <li>
                                    <a href="#" className='text-sm text-muted-foreground hover:text-foreground'>About Us</a>
                                </li>

                                <li>
                                    <a href="#" className='text-sm text-muted-foreground hover:text-foreground'>Careers</a>
                                </li>

                                <li>
                                    <a href="#" className='text-sm text-muted-foreground hover:text-foreground'>Services</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className='text-sm font-semibold'>Resources</h4>
                            <ul className='mt-4 space-y-2'>
                                <li>
                                    <a href="#" className='text-sm text-muted-foreground hover:text-foreground'>Blog</a>
                                </li>

                                <li>
                                    <a href="#" className='text-sm text-muted-foreground hover:text-foreground'>Documentation</a>
                                </li>

                                <li>
                                    <a href="#" className='text-sm text-muted-foreground hover:text-foreground'>Support</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className='text-sm font-semibold'>Connect</h4>
                            <div className='mt-4 flex items-start gap-4'>                                
                                    <a href="#" className='text-muted-foreground hover:text-foreground'>
                                        <Linkedin className='h-5 w-5'/>
                                    </a>
                                    <a href="#" className='text-muted-foreground hover:text-foreground'>
                                        <Github className='h-5 w-5'/>
                                    </a>
                                    <a href="#" className='text-muted-foreground hover:text-foreground'>
                                        <X className='h-5 w-5'/>
                                    </a>
                                    <a href="#" className='text-muted-foreground hover:text-foreground'>
                                        <Mail className='h-5 w-5'/>    
                                    </a>                          
                            </div>
                        </div>                        
                    </div>   

                    <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                        <p>{currentYear} Corporate. All rights reserved.</p>
                    </div>
                </div>                
            </footer>
        </>
    )
}

export default Footer
