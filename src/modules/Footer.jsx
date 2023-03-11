import SocialMediaIcons from "../components/SocialMediaIcons";

export const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-RobotoSlab font-semibold text-2xl text-yellow">
            Luis Matamoros
          </p>
          <p className="font-OpenSans text-base text-yellow">
            &copy; ITCTRL. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
