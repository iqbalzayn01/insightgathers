import { CardBlog } from "../Blog";
import { CardEvent } from "../Events";

export const Hero = () => {
  return (
    <section className="2xl:container-base realtive flex flex-col gap-10 px-5 py-5 mt-[90px]">
      <div className="w-full block">
        <h1 className="font-semibold text-5xl md:text-7xl 2xl:text-8xl mb-1">
          Your Gateway to Knowledge
        </h1>
        <p className="p-base">Unlock Learning, Embrace Connection</p>
      </div>
      <div className="relative grid lg:grid-cols-2 lg:grid-rows-2 gap-5">
        <CardBlog />
        <CardEvent
          title="Unlocking Creativity Symposium"
          date="Saturday, 12 March 2024"
          status="Open"
          pathimage="/content/img-card-2.png"
        />
        <CardEvent
          title="Unlock Learning, Embrace Connection"
          date="Sunday, 12 May 2024"
          status="Open"
          pathimage="/content/img-card-3.png"
        />
      </div>
    </section>
  );
};
