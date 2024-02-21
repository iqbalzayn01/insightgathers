export const Hero = () => {
  return (
    <section className="2xl:container-base px-5 py-5">
      <div className="w-full block">
        <h1>Your Gateway to Knowledge</h1>
        <p>Unlock Learning, Embrace Connection</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        <div className="bg-black col-span-1 row-span-2 p-5">Card 1</div>
        <div className="bg-black col-span-1 row-span-1 p-5">Card 2</div>
        <div className="bg-black col-span-1 row-span-1 p-5">Card 3</div>
      </div>
    </section>
  );
};
