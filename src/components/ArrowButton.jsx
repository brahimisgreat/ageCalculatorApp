import React from 'react'
import arrow from '../assets/icon-arrow.svg'
import './ArrowButton.css'

export default function ArrowButton() {
  return (
    <div className='arrow-container'>
        <div className='line'></div>
        <img src={arrow} />
        <div className='line2'></div>
    </div>
  )
}
