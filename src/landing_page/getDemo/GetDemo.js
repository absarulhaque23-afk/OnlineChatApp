import React from 'react'

export default function GetDemo() {
  return (
    <div className='container mt-5 pt-5'>
      <div className='row'>
        <div className='col-md-6 mt-5 pt-5'>
          <img src='media/laptoptable.jpg' alt='LowSec' className='img-fluid' />
        </div>
         <div className='col-md-6 gap-3 mt-5 pt-5 text-center align-items-center'>
          <h1 className='mt-5'>Perfect Solution for Small Businesses</h1>
          <p className='mt-2'>Pricing Plans that fit like a glove</p>
          <div className='mt-4'>
            <button className='btn btn-primary me-3 mt-4'>Try it Free</button>
            <button className='btn btn-outline-primary mt-4'>Get a Demo</button>
          </div>
          <p className='mt-4'>3.6 Million calls completed with a 96.8% 5 star ratting</p>
        </div>
      </div>
    </div>
  )
}
