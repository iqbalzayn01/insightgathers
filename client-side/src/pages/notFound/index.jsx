import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <h1 className="font-semibold text-2xl text-black">404 Not Found</h1>
        <Link to="/" className="text-lg hover:underline">{`< Back`}</Link>
      </div>
    </section>
  );
}
