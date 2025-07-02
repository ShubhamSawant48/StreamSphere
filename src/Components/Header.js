import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="w-full h-20 absolute bg-gradient-to-b from-black">
      <img
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
        className="w-60 h-20 ml-20 mt-2"
      ></img>
    </div>
  );
};

export default Header;
