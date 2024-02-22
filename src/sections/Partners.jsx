import PropTypes from "prop-types";

const ImagesPartner = ({ id }) => {
  return <img src={`/content/partner-${id}.svg`} alt={`partner ${id}`} />;
};

ImagesPartner.propTypes = {
  id: PropTypes.number.isRequired,
};

export const Partners = () => {
  return (
    <section className="grid place-content-center text-center gap-[30px] px-5 py-5">
      <p className="p-base text-colorgray">
        Events held by top & biggest global companies
      </p>
      <div className="flex flex-wrap place-content-center gap-5 lg:gap-[70px]">
        {[1, 2, 3, 4, 5].map((imageID) => (
          <ImagesPartner key={imageID} id={imageID} />
        ))}
      </div>
    </section>
  );
};
