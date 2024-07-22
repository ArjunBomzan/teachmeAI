'use client'
import React from 'react'
import Services from '../components/home/Services'
import { services } from '../../data'

export default function page() {
  return (
    <div className='container mt-10'>
  
      <Services data={services} />
    </div>
  )
}
