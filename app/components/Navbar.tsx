import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="mx-2">
      <nav className="navbar">
        <Link to="/">
          <p className="text-sm md:text-xl font-bold text-gradient">
            RESUME ANALYZER
          </p>
        </Link>
        <Link
          to="/upload"
          className="primary-button w-fit text-sm md:text-base"
        >
          Upload Resume
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
