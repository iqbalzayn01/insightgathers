import FormSignIn from './FormSignIn';

export default function SignIn() {
  return (
    <section>
      <div className="container-base px-5 py-5">
        <div className="grid grid-cols-2">
          <div className="">col1</div>
          <div className="flex flex-col h-screen place-items-center place-content-center gap-2">
            <h2 className="font-semibold text-5xl">Welcome Back</h2>
            <p className="p-base mb-10">Please enter your details.</p>
            <FormSignIn />
          </div>
        </div>
      </div>
    </section>
  );
}
