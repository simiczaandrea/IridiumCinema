import React, { Children } from 'react'
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div className='loading-spinner'>
     <div className='loading-spinner__loader loading-spinner__loader--1'>
      </div>
      <div className='loading-spinner__loader loading-spinner__loader--2'>
      </div>
      <div className='loading-spinner__loader loading-spinner__loader--3'>
      </div>
    </div>
  )
}

export default LoadingSpinner