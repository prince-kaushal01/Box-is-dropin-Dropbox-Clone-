import { PiGlobeBold } from "react-icons/pi";
import DropboxLogo from "/Dropbox-logo.png";

const Navbar = () => {

  const leftLinks = ["Products", "Solutions", "Enterprise", "Pricing"];
  const rightLinks = ["Contact Sales", "Get app", "Sign up", "Log in"];

  return (
    <nav
      className="bg-white w-full fixed top-0 shadow-sm z-[999] px-6 py-4 flex items-center justify-between text-black"
    >
      {/* Left Section */}
      <div className="flex items-center gap-10 font-semibold">
        <img src={DropboxLogo} alt="Dropbox" className="h-12 w-12 nav-item" />
        <h3 className="text-2xl font-bold -ml-6 nav-item cursor-pointer">Dropbox</h3>
        {leftLinks.map((text) => (
          <p key={text} className="hover:text-blue-700 transition-colors nav-item cursor-pointer">
            {text}
          </p>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 font-semibold">
        <span>
          <PiGlobeBold size={20} className="text-black" />
        </span>
        {rightLinks.map((text) => (
          <p key={text} className="hover:text-blue-700 transition-colors cursor-pointer">
            {text}
          </p>
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl ml-4 text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
