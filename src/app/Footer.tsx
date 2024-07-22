"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
let date = new Date();
let year = date.getFullYear();
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
type Inputs = {
  email: string;
};
function Footer() {
  const [isloading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const initial: Inputs = {
    email: "",
  };

  function submit(data: any) {
    setIsloading(true);
    const serviceid = process.env.NEXT_PUBLIC_SERVICEID || "";
    const templateid = process.env.NEXT_PUBLIC_TEMPLATEID || "";
    emailjs
      .send(serviceid, templateid, data, {
        publicKey: process.env.NEXT_PUBLIC_PUBLICKEY,
      })
      .then(
        (response) => {
          toast("Subsribed to  Teach Me Ai", {
            position: "bottom-right",
          });

          reset(initial);
          setIsloading(false);
        },
        (err) => {
          toast("Please send again");
        }
      );
  }

  return (
    <div
      style={{
        backgroundImage: ` linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%), url('/teams/img4.webp')`,
      }}
      className="bg-center bg-cover  bg-no-repeat h-[60vh] text-white"
    >
      <div className="flex flex-col gap-5 justify-center items-center mt-10 container p-10">
        <p className="mt-5 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px] text-white font-semibold">
          Subscribe
        </p>
        <p>Sign up with your email address to receive news and updates.</p>
        <div className="flex flex-col justify-center items-center gap-4 lg:flex-row">
          <input
            type="email"
            className="inputField"
            {...register("email", {
              required: {
                message: "required field",
                value: true,
              },
            })}
          />
          {errors.email && (
            <small className="text-red-600">{`${errors.email.message}`}</small>
          )}
          <button className="btn" onClick={handleSubmit(submit)}>
            {isloading ? "Loadding" : "Sign Up"}
          </button>
        </div>
        <p className="text-center mb-3">
          © {year} Teach Me AI. All Rights Reserved{" "}
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Footer;
