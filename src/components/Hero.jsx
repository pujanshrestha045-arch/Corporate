import React from 'react'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <>
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-background'>
        <div className="absolute inset-0 bg-[url('/abstractbg.jpg')] bg-cover bg-center opacity-10" />
            <div className=" z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-3xl mx-auto text-center ">
                    <h1 className='text-balance font-semibold text-5xl sm:text-6xl lg:text-7xl text-foreground'>Transform Your Business with Strategic Innovation</h1>
                    <p className='mt-6 text-pretty text-lg text-muted-foreground sm:text-xl'>We partner with forward-thinking companies to deliver sustainable solutions that drive growth, efficiency,
                    and lasting impact in an ever-evolving market.</p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className='flex items-center gap-2 border rounded-lg p-2 text-muted bg-foreground'>
                        Get Started
                        <ArrowRight className='h-4 w-4' />
                    </button>
                    <button className='border rounded-lg p-2 text-foreground bg-background'>
                        Learn More
                    </button>
                </div>
                </div>
            </div>
        
      </section>
    </>
  )
}

export default Hero