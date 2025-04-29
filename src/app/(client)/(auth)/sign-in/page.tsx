import React from 'react';
import FormSignIn from './_components/form';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <section className="container mx-auto h-svh grid grid-cols-1 lg:grid-cols-2 p-5">
      <div
        style={{
          backgroundImage: 'url(/content/img-signin.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
        }}
        className="hidden lg:flex flex-col justify-between p-5 rounded-xl"
      >
        <span className="text-[32px] text-colorprimary font-extrabold">
          InsightGathers.
        </span>
        <div className="flex flex-col justify-between gap-40">
          <span className=" text-white text-3xl font-semibold">
            We provide various top-notch events to help you enhance your skills
            in the field of technology.
          </span>
          <span className="w-1/3 text-colorprimary font-semibold">
            Copyright © 2024 InsightGathers All Right Reserved
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col place-content-center gap-5 px-5 md:px-20 py-5">
        <h1 className="font-bold text-2xl text-zinc-400 text-center">
          Sign In
        </h1>
        <h2 className="text-balance text-2xl md:text-5xl lg:text-6xl text-center font-semibold">
          Welcome Back
        </h2>
        <p className="text-balance text-sm md:text-lg lg:text-xl text-center px-0 2xl:px-10">
          Please enter your details.
        </p>
        <FormSignIn />
      </div>
    </section>
  );
}
