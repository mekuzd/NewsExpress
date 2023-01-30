import { useEffect, useState } from "react";
import { FaBars, FaAngleDown, FaAngleUp, FaUserCircle } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import Sidebar from "./Sidebar";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [changeNav, setchangeNav] = useState(false);
  const [show, setShow] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const showDropdown = () => {
    setdropdown(true);
  };
  const closeDropdown = () => {
    setdropdown(false);
  };

  const changeNavbarClass = () => {
    if (window.scrollY > 80) {
      setchangeNav(true);
    } else {
      setchangeNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarClass);
    return () => {
      window.removeEventListener("scroll", changeNavbarClass);
    };
  }, [window.scrollY]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <nav
      className={`shadow  ${
        changeNav && " scroll animate__animated animate__fadeInDown "
      } d-flex justify-content-around p-2 `}
    >
      {/* mobile navbar  */}

      <Link to={"/"} className="fs-2 fw-bold text-dark">
        News Express
      </Link>

      <button className="d-block d-md-none ms-auto barsbtn ">
        <FaBars className=" fs-4" onClick={handleShow} />
      </button>
      {/* toggle bar */}

      <Sidebar
        show={show}
        handleClose={handleClose}
        showDropdown={showDropdown}
        dropdown={dropdown}
        closeDropdown={closeDropdown}
      />

      {/* nav links on desktop */}
      <div className="d-none d-md-flex  justify-content-center align-items-center  ">
        <Link to={"/"} className="mx-4 fs-6 text-dark ">
          Home
        </Link>
        <Link to={"/explorelatest"} className="text-dark mx-4  fs-6 ">
          Explore Latest{" "}
        </Link>
        <p
          className=" ms-2 fs-6 position-relative my-2 "
          onMouseOver={showDropdown}
          onMouseOut={closeDropdown}
        >
          About us{" "}
          <span className="mx-1">
            {dropdown ? <FaAngleUp /> : <FaAngleDown />}
          </span>
          {dropdown && <Dropdown />}
        </p>
      </div>

      <div className="d-none d-md-flex justify-content-center align-items-center">
        <Link to={"/signup"} className="text-dark fs-5 ">
          <span className="mx-2">
            <FaUserCircle />
          </span>
          SignUp
        </Link>
        <Link to={"/login"} className="mx-4 text-dark fs-5  ">
          Login{" "}
          <span>
            <AiOutlineLogin />
          </span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
