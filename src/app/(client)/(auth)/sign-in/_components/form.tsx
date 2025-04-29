import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function SubmitButton() {
  return (
    <Button
      type="submit"
      className="cursor-pointer bg-zinc-800 hover:bg-colorprimary px-5 py-2 text-center text-colorprimary hover:text-zinc-700 mb-2 rounded-lg"
    >
      Sign In
    </Button>
  );
}

export default function FormSignIn() {
  return (
    <form action="" className="flex flex-col items-center justify-center gap-5">
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
      <SubmitButton />
      <p className="text-secondarycolor">
        Don&apos;t have an account?
        <Link href="/sign-up" className="font-bold underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
