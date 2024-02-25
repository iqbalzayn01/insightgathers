import PropTypes from "prop-types";

import { ButtonItem } from "../components/Navbar";

const CardTesti = ({ className, title, testi, pathimage }) => {
  return (
    <div
      className={`bg-black grid sm:grid-cols-2 md:gap-5 ${className} rounded-xl`}
    >
      <div
        style={{
          backgroundImage: `url(${pathimage})`,
          objectFit: "cover",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-gray-300 h-[400px] md:h-full flex items-end justify-center rounded-xl"
      >
        <ButtonItem
          className="btn-base w-fit h-fit bg-colorprimary font-semibold text-base mb-8"
          btnName="Read"
        />
      </div>
      <div className="w-full flex flex-col gap-5 pl-5 md:pl-0 pr-5 py-5 md:mb-20">
        <span className="font-medium text-colorprimary text-base">Story</span>
        <h3 className="font-medium text-colorprimary text-lg md:text-2xl">
          {title}
        </h3>
        <p className="font-medium text-white text-sm">{testi}</p>
      </div>
    </div>
  );
};

CardTesti.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  testi: PropTypes.string.isRequired,
  pathimage: PropTypes.string.isRequired,
};

export const Testimonials = () => {
  return (
    <section className="2xl:container-base flex flex-col gap-10 px-5 py-5">
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-5">
        <CardTesti
          className="col-span-1 row-span-1"
          title="A Catalyst for Change. Empowering Stories"
          testi="Transformative! InsightGathers fueled my startup journey, aiding communities during the pandemic. Grateful beyond words."
          pathimage="/public/content/user-1.png"
        />
        <CardTesti
          className="col-span-1 row-span-2"
          title="One Great Event For The Better World."
          testi="Read the story of how Shayna successfully built a startup that assists residents in obtaining aid during the pandemic."
          pathimage="/public/content/user-2.png"
        />
        <CardTesti
          className="col-span-1 row-span-1"
          title="Empowering Minds. Unleashing Potential."
          testi="InsightGathers, a game-changer! Found invaluable connections and insights that propelled my professional journey to new heights."
          pathimage="/public/content/user-3.png"
        />
      </div>
    </section>
  );
};
