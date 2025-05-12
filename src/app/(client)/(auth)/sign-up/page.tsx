import React from 'react';
import FormSignUp from './_components/form';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <section className="container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 p-5">
      <div
        style={{
          backgroundImage: 'url(/content/img-signup.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
        }}
        className="hidden lg:flex flex-col justify-end p-5 rounded-xl"
      >
        <h1 className="text-3xl text-white font-semibold">
          We provide various top-notch events to help you enhance your skills in
          the field of technology.
        </h1>
      </div>
      <div className="w-full flex flex-col place-content-center gap-5 px-5 md:px-10 py-5">
        <h2 className="text-balance text-2xl md:text-[32px] text-center font-extrabold">
          InsightGathers.
        </h2>
        <div className="bg-black w-fit flex p-1.5 rounded-lg self-center gap-2">
          <Link
            href={'/sign-in'}
            className="cursor-pointer bg-transparent hover:bg-zinc-800 text-[14px] text-white font-medium px-8 py-2 rounded-[4px]"
          >
            Sign In
          </Link>
          <Link
            href={'/sign-up'}
            className="cursor-pointer bg-colorprimary hover:bg-[#A0C700] text-[14px] text-black font-medium px-8 py-2 rounded-[4px]"
          >
            Sign Up
          </Link>
        </div>
        <h2 className="text-balance text-2xl md:text-3xl text-center font-semibold">
          Expand Your Knowledge & Skills
        </h2>
        <p className="text-balance text-base text-center px-0 2xl:px-10">
          We provide various top-notch events to help you enhance your skills in
          the field of technology.
        </p>
        <FormSignUp />
      </div>
    </section>
  );
}
