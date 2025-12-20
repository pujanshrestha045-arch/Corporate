import React from 'react'
import { Lightbulb, Target, TrendingUp, Shield, Zap, Users } from 'lucide-react'

function Services() {

const iconMap = {
  lightbulb: Lightbulb,
  target: Target,
  trending: TrendingUp,
  shield: Shield,
  zap: Zap,
  users: Users,
}

    const services = [
        {
            id: 1,
            title: "Strategic Planning",
            description:
                "Develop comprehensive strategies that align with your business objectives and drive sustainable growth.",
            icon: "target",
        },
        {
            id: 2,
            title: "Digital Transformation",
            description: "Modernize your operations with cutting-edge technology solutions tailored to your industry.",
            icon: "zap",
        },
        {
            id: 3,
            title: "Market Analysis",
            description: "Gain deep insights into market trends and competitive landscapes to make informed decisions.",
            icon: "trending",
        },
        {
            id: 4,
            title: "Risk Management",
            description: "Identify, assess, and mitigate potential risks to protect your business and ensure compliance.",
            icon: "shield",
        },
        {
            id: 5,
            title: "Innovation Consulting",
            description: "Foster a culture of innovation with strategies that encourage creativity and breakthrough thinking.",
            icon: "lightbulb",
        },
        {
            id: 6,
            title: "Talent Solutions",
            description: "Optimize your workforce with strategic hiring, training, and organizational development programs.",
            icon: "users",
        },
    ]
  
    return (
    <>
      <section id='services' className='py-24 sm:py-32'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                    Our Services
                </h2>
                <p className='mt-4 text-pretty text-lg'>
                    Comprehensive solutions tailored to your business needs
                </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => {
                    const Icon = iconMap[service.icon] || Lightbulb
                    return(
                        <div key={service.id} className='p-8 hover:shadow-lg hover:translate-y-1'>
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg ">
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className='mt-6 text-xl font-semibold'>{service.title}</h3>
                            <p className='mt-4'>{service.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>
    </>
  )
}

export default Services
