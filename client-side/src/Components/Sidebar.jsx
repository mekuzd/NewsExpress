import { FaAngleDown } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ show, handleClose }) => {
  const [dropdown, setdropdown] = useState(false);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      className={`  ${
        show
          ? "animate__animated animate__slideInDown "
          : "animate__animated animate__slideOutUp"
      } `}
    >
      <Offcanvas.Header closeButton>
        {" "}
        <Link to={"/"} className="fs-3 fw-bold text-dark">
          Mekus Airline
        </Link>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {" "}
        <div className=" d-column-flex justify-content-between align-items-center ">
          <li className=" fs-6">BookNow</li>
          <p className="  fs-6">Explore Dubai </p>
          <li
            className="text-dark  fs-6"
            onClick={() => setdropdown(!dropdown)}
          >
            About us{" "}
            <span>
              <FaAngleDown />
            </span>
            {dropdown && (
              <ul>
                <li>Contacts</li>
                <li>Team</li>
                <li>Testimonials</li>
              </ul>
            )}
          </li>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Link to={"/signup"} className="text-dark fs-5">
            SignUp
          </Link>
          <Link to={"/login"} className="mx-4 text-dark fs-5">
            Login{" "}
            <span>
              <AiOutlineLogin />
            </span>
          </Link>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default Sidebar;
