import React from 'react'
import { ComingSoon } from '../common/ComingSoon'
import './Contact.scss'

export const Contact = () => {
  return (
    <div className='contact-container flex items-center justify-center flex-col'>
      <ComingSoon />
      <div>
        <p className='mt-10 text-center text-lato text-2xl'>
          While this page is created...
        </p>
        <p className='mt-10 text-center text-lato text-2xl'>
          Please send an email to salvador.gonzalez@salvagonzalez.com for any bussiness deals.
        </p>
        <p className='mt-10 text-center text-lato text-2xl'>
          Thank you!
        </p>
      </div>
    </div>
  )
}

export default Contact