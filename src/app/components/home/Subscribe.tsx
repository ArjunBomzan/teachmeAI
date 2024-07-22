"use client"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
type Inputs={
  email:string
}
function Subscribe() {
  const [isloading, setIsloading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm<Inputs>()
const initial:Inputs={
  email:""

}

  function submit(data: any) {

    setIsloading(true)
const serviceid=process.env.NEXT_PUBLIC_SERVICEID || ""
const templateid=process.env.NEXT_PUBLIC_TEMPLATEID || ""
    emailjs
      .send(serviceid ,templateid, data, {
        publicKey: process.env.NEXT_PUBLIC_PUBLICKEY,
      })
      .then(
        (response) => {
        
          toast("Subsribed to  Teach Me Ai", {
            position: "bottom-right"
          })
         
          reset(initial)
          setIsloading(false)

        },
        (err) => {
          
          toast("Please send again")
        },
      );
  }
  return (
    <div className='bg-[#EAEAEE] ' >
      <div className='flex flex-col gap-5 justify-center items-center my-5 lg:h-[50vh] container'>
        <p className='mt-5 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px] font-semibold'>Subscribe</p>
        <p>Subscribe today to get the latest free tips, tools, and news on how to bring AI into your classroom and practice.</p>
        <div
          className='flex flex-col justify-center items-center gap-4 lg:flex-row'>
             <input type="email" className='inputField' {...register("email", {
              required: {
                message: 'required field',
                value: true
              }
            })} />
            {errors.email && (
              <small className='text-red-600'>{`${errors.email.message}`}</small>
            )}
          <button className='btn mb-3'onClick={handleSubmit(submit)}>
            {
              isloading?"Loadding":"Sign Up"

            }
          </button>

        </div>

      </div>

    </div >
  )
}

export default Subscribe