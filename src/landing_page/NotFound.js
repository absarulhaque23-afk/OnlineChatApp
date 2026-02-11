import React from 'react'

function NotFound() {
  return (
    <div className='container text-center d-flex flex-column min-vh-100'>
        <div className='row flex-grow-1 justify-content-center align-items-center'>
            <div className='col-md-8'>
                <h1 className='display-1'>404</h1>
                <h2 className='mb-4'>Page Not Found</h2>
                <p className='mb-4'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <a href='/' className='btn btn-primary'>Go to Homepage</a>
            </div>
        </div>
    </div>
  )
}

export default NotFound
