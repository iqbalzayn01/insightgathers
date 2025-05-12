import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function SubmitButton() {
  return (
    <Button
      type="submit"
      className="cursor-pointer bg-zinc-800 hover:bg-colorprimary px-5 py-2 text-center text-white hover:text-zinc-700 mb-2 rounded-lg"
    >
      Sign Up
    </Button>
  );
}

export default function FormSignUp() {
  return (
    <form action="" className="flex flex-col items-center justify-center gap-5">
      <div className="w-full grid gap-2">
        <Label
          htmlFor="name"
          className="text-sm md:text-base text-black font-medium"
        >
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          className="w-full"
          required
        />
      </div>
      <div className="w-full grid gap-2">
        <Label
          htmlFor="email"
          className="text-sm md:text-base text-black font-medium"
        >
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="m@example.com"
          className="w-full"
          required
        />
      </div>
      <div className="w-full grid gap-2">
        <Label
          htmlFor="no-telp"
          className="text-sm md:text-base text-black font-medium"
        >
          Phone Number
        </Label>
        <Input
          id="no-telp"
          name="no-telp"
          type="text"
          placeholder="+6282112345678"
          className="w-full"
          required
        />
      </div>
      <div className="w-full grid gap-2">
        <Label
          htmlFor="password"
          className="text-sm md:text-base text-black font-medium"
        >
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="w-full"
          required
        />
      </div>
      <div className="w-full grid gap-2">
        <Label
          htmlFor="confirmPassword"
          className="text-sm md:text-base text-black font-medium"
        >
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="w-full"
          required
        />
      </div>
      <SubmitButton />
      <Link href="/" className="text-secondarycolor hover:underline">
        Back
      </Link>
      <p className="text-center text-black">
        Copyright © 2025 InsightGathers All Right Reserved
      </p>
    </form>
  );
}
