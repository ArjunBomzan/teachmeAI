'use client'
import { StringifyOptions } from 'querystring'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

type Inputs = {
  firstName: string
  lastName: string
  email: string
  school: string
  message: string
  title: String
}

const initial:Inputs = {
  firstName: "",
  lastName: "",
  email:"",
  school: "",
  message: "",
  title: ""
}

function page() {
  const [isloading, setIsloading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm<Inputs>()


  function submit(data: any) {

    setIsloading(true)

    const serviceid=process.env.NEXT_PUBLIC_SERVICEID || ""
    const templateid=process.env.NEXT_PUBLIC_TEMPLATEID || ""
        emailjs
          .send(serviceid ,templateid, data, {
            publicKey: process.env.NEXT_PUBLIC_PUBLICKEY,
          })
      .then(
        (response) => {console.log('SUCCESS!', response.status, response.text);
          toast("Submitted to Teach Me Ai", {
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
    <>
      <div className='flex justify-between  container my-10 flex-col-reverse gap-10 lg:flex-row'>
        <div>
          <p className='font-bold m-5'>Contact Us</p>
          <div className='flex gap-2 m-1 ' >
            <AiOutlineMail className='text-[20px] text-[#15cccc] ' /><p>Email:  emailteachmeai@gmail.com </p>
          </div>
          <div className='flex gap-2 m-1 ' >
            <AiOutlinePhone className='text-[20px] text-[#15cccc]' />
            <p>Phone:  9767287257</p>
          </div>  
          <div className='mt-5'>
          <p className='font-bold m-5'>Our Social Media</p>
          <div >
            <a href='https://www.facebook.com/techfornepaal?mibextid=LQQJ4d'target='_blank' 
            className='flex gap-2 cursor-pointer hover:scale-[1.05] m-1'>
            <AiOutlineFacebook className='text-[20px] text-[#15cccc]'/>
            <p>Facebook</p>
            </a>
          </div >
          <div  className='flex gap-2 cursor-pointer'>
          <a href='https://www.instagram.com/teachme_ai?igsh=MXgyaG56NWQzYzRtcw%3D%3D&utm_source=qr'target='_blank' 
            className='flex gap-2 cursor-pointer hover:scale-[1.05] m-1'>
          <AiOutlineInstagram  className='text-[20px] text-[#15cccc]'/>
            <p>Instragram</p>
            </a>
          </div>
          <div  className='flex gap-2 cursor-pointer'>
          <a href='https://www.linkedin.com/company/teach-me-ai/'target='_blank' 
            className='flex gap-2 cursor-pointer hover:scale-[1.05] m-1'>
            <AiFillLinkedin className='text-[20px] text-[#15cccc]'/>
            <p>LinkedIn</p>
            </a>
          </div>
          </div>
        </div>


        <div className='flex flex-col gap-4'>
          <div className=''>
            <label>Name</label>
            <div className='flex flex-col lg:flex-row gap-3'>
              <div className='flex flex-col'>
                <label htmlFor="" className='required'>First Name</label>
                <input type='text' className='inputField'
                  {...register("firstName", {
                    required: {
                      message: 'required field',
                      value: true
                    }
                  })} />
                {errors.firstName && (
                  <small className='text-red-600'>{`${errors.firstName.message}`}</small>
                )}
              </div>
              <div className='flex flex-col'>
                <label htmlFor="" className='required'>Last Name</label>
                <input type='text' className='inputField'{...register("lastName", {
                  required: {
                    message: 'required field',
                    value: true
                  }
                })} />

                {errors.lastName && (
                  <small className='text-red-600'>{`${errors.lastName.message}`}</small>
                )}
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='required'>Email</label>
            <input type="email" className='inputField' {...register("email", {
              required: {
                message: 'required field',
                value: true
              }
            })} />
            {errors.email && (
              <small className='text-red-600'>{`${errors.email.message}`}</small>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='required'>title</label>
            <input type="text" className='inputField' {...register("title", {
              required: {
                message: 'required field',
                value: true
              }
            })} />
            {errors.title && (
              <small className='text-red-600'>{`${errors.title.message}`}</small>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='required'>School</label>
            <input type="text" className='inputField' {...register("school", {
              required: {
                message: 'required field',
                value: true
              }
            })} />
            {errors.school && (
              <small className='text-red-600'>{`${errors.school.message}`}</small>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='required'>Message</label>
            <textarea className='inputField' {...register("message", {
              required: {
                message: 'required field',
                value: true
              }
            })} />
            {errors.message && (
              <small className='text-red-600'>{`${errors.message.message}`}</small>
            )}
          </div>
          <button className='btn' disabled={isloading} onClick={handleSubmit(submit)}>
            {
              isloading ? "Loading" : "Submit"
            }
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default page