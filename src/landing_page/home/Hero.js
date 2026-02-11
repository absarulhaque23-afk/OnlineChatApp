import React from 'react'


export default function Hero() {
    const handleDemo = () => {
        window.location.href = '/get-a-demo';
    };
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 mt-5 pt-5 align-self-center text-center'>
                <h1 className='mt-5'>Have your best call</h1>
                <p className='mt-3'>Fast,Easy & Unlimited Conference Call Service.</p>
                <div className='mt-5'>
                    <button className='btn btn-primary me-3'>Try it Free</button>
                    <button className='btn btn-outline-primary' onClick={handleDemo}>Get a Demo</button>
                </div>
            </div>
            <div className='col-md-6'>
                <img src='media/onlineconsultant_4.jpg' alt='Hero' className='img-fluid' />
            </div>
        </div>
    </div>
  )
}
