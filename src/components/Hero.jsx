import React from 'react'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <>
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className="absolute inset-0">
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className='text-balance text-5xl sm:text-6xl lg:text-7xl'>Transform Your Business with Strategic Innovation</h1>
                    <p className='mt-6 text-lg sm:text-xl'>We partner with forward-thinking companies to deliver sustainable solutions that drive growth, efficiency,
                    and lasting impact in an ever-evolving market.</p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className='flex items-center gap-2 border rounded-lg p-1'>
                        Get Started
                        <ArrowRight className='h-4 w-4' />
                    </button>
                    <button className='border rounded-lg p-1'>
                        Learn More
                    </button>
                </div>
                </div>
            </div>
        </div>

      </section>
    </>
  )
}

export default Hero