import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className='text-coral-red'>Special</span> Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">Discover some new stylish Nike arrivals to live a more active and healthy life.</p>
        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail makes our products superior in quality and style</p>

        <div className='flex flex-wrap gap-4 mt-11'>
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>

    </section>
  )
}

export default SpecialOffers