import { ButtonItem } from "../Navbar";

export const AboutUs = () => {
  return (
    <section className="2xl:container-base grid md:grid-cols-2 gap-5 px-5 py-5">
      <div className="block">
        <h2 className="font-semibold text-4xl md:text-5xl mb-5">
          Journey with <b className="font-extrabold">InsightGathers</b>
        </h2>
        <ButtonItem
          className="btn-base bg-colorprimary font-semibold text-base"
          btnName="More"
        />
      </div>
      <p className="p-base leading-relaxed">
        Welcome to InsightGathers, where insights meet connections. We&apos;re
        on a mission to create a platform for thought-provoking events that
        transcend borders. InsightGathers is your destination for quality
        content, global connections, and a seamless insight-gathering
        experience. Join our thriving community, and let&apos;s shape the future
        of knowledge together. At InsightGathers, every insight gathered is a
        step towards growth and understanding.
      </p>
    </section>
  );
};
