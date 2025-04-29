import React from 'react';
import FormSignUp from './_components/form';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <section className="container mx-auto h-svh grid grid-cols-1 lg:grid-cols-2 p-5">
      <div
        style={{
          backgroundImage: 'url(/content/img-signup.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
        }}
        className="hidden lg:flex flex-col justify-between p-5 rounded-xl"
      >
        <span className="text-[32px] text-colorprimary font-extrabold">
          InsightGathers.
        </span>
        <div className="flex items-end justify-between">
          <span className="w-1/3 text-colorprimary font-semibold">
            Copyright © 2024 InsightGathers All Right Reserved
          </span>
          <Link
            href="#"
            className="text-colorprimary font-semibold hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-colorprimary font-semibold hover:underline"
          >
            Privacy Police
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col place-content-center gap-5 px-5 md:px-20 py-5">
        <h1 className="font-bold text-2xl text-zinc-400 text-center">
          Sign Up
        </h1>
        <h2 className="text-balance text-2xl md:text-5xl lg:text-6xl text-center font-semibold">
          Expand Your Knowledge & Skills
        </h2>
        <p className="text-balance text-sm md:text-lg lg:text-xl text-center px-0 2xl:px-10">
          We provide various top-notch events to help you enhance your skills in
          the field of technology.
        </p>
        <FormSignUp />
      </div>
    </section>
  );
}
