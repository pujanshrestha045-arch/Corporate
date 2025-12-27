import React from 'react'
import { ArrowRight } from 'lucide-react'

function Contact() {
  return (
    <>
      <section id='contact' className='py-24 sm:py-32 bg-primary text-primary-foreground'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className='text-balance text-3xl font-semibold sm:text-4xl'>
              Ready to Transform Your Business?
            </h2>
            <p className='mt-4 text-pretty text-lg text-primary-foreground/80'>
              Join hundreds of companies that trust us to deliver innovative solutions that drive measurable results.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <button className='flex items-center justify-center gap-2 bg-accent text-secondary-foreground p-2 rounded-lg border border-accent hover:bg-accent/80'>
                Schedule a Consultation
                <ArrowRight className='h-4 w-4'/>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
