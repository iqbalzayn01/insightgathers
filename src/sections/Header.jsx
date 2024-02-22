import { Navbar, ButtonItem } from "../components/Navbar";

export const Header = () => {
  return (
    <header className="2xl:container-base fixed inset-0 z-50 bg-colorsecondary h-fit flex items-center justify-between px-5 py-5">
      <a
        href="/"
        className="logo font-extrabold text-xl lg:text-[32px] leading-normal"
      >
        InsightGathers.
      </a>
      <Navbar className="hidden md:flex" />
      <div className="hidden md:flex items-center gap-5">
        <ButtonItem
          className="btn-base hover:bg-colorprimary border border-black hover:border-colorprimary font-semibold text-sm lg:text-base"
          btnName="Sign In"
        />
        <ButtonItem
          className="btn-base bg-black hover:bg-colorprimary font-semibold text-colorprimary hover:text-black text-sm lg:text-base"
          btnName="Sign Up"
        />
      </div>
      {/* Mobile */}
      <ButtonItem
        className="flex md:hidden btn-base border border-black font-semibold text-sm md:text-base"
        btnName="Menu"
      />
    </header>
  );
};
