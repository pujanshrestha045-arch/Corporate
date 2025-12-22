import React from 'react'

function Testimonials() {
  if(loading)
    return (
      <>
        <section id='testimonials' className='py-24 sm:py-32'>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className='text-balance text-3xl font-semibold sm:text-4xl'>Client Success Stories</h2>
              <p className='mt-4 text-pretty text-lg'>Hear from the people we've helped transform</p>
            </div>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-8 border rounded-lg shadow-lg">
                <div className="h-20 w-full bg-gray-300"></div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                  <div className="h-5 w-24 bg-gray-300"></div>
                  <div className="mt-2 h-5 w-32 bg-gray-300"></div>
                </div>
              </div>
            ) )}
          </div>
        </section>
      </>
  )
}

export default Testimonials
