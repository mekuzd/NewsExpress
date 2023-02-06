import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";
const Footer = () => {
  const [date, setdate] = useState(new Date().getFullYear());

  return (
    <>
      <footer
        className="d-flex justify-content-between gap-1 flex-wrap "
        style={{ width: "80%", margin: "30px auto" }}
      >
        {/* need any help  */}
        <main>
          <h5 className="my-4">Need any help?</h5>
          <div className=" p-2 HomeFooter">
            <p>Call 24/7 for any help</p>
            <p> +00 123 456 789</p>
          </div>
          <div className="my-3 p-2 HomeFooter">
            <p>Mail to our support team</p>
            <p> support@domain.com</p>
          </div>
          <div className=" p-2 HomeFooter">
            <p>Follow us on </p>
            <p className="d-flex gap-2">
              <span>
                <FaFacebookF />
              </span>{" "}
              <span>
                <FaTwitter />
              </span>{" "}
              <span>
                <FaInstagram />
              </span>
            </p>
          </div>
        </main>
        {/* Company  */}

        <main>
          <h5 className="my-4">Company</h5>
          <p>About us</p>
          <p>Testimonials</p>
          <p>Rewards</p>
          <p>Work with us</p>
          <p>Meet the team</p>
        </main>
        {/* support  */}
        <main>
          <h5 className="my-4">Support</h5>
          <p>About us</p>
          <p>Testimonials</p>
          <p>Rewards</p>
          <p>Work with us</p>
          <p>Meet the team</p>
        </main>
        {/* other services  */}
        <main>
          <h5 className="my-4">other services</h5>
          <p>About us</p>
          <p>Testimonials</p>
          <p>Rewards</p>
          <p>Work with us</p>
          <p>Meet the team</p>
        </main>
        {/* top citites  */}
        <main>
          <h5 className="my-4">Top cities</h5>
          <p>About us</p>
          <p>Testimonials</p>
          <p>Rewards</p>
          <p>Work with us</p>
          <p>Meet the team</p>
        </main>
      </footer>
      <footer>
        <div className="footer  d-flex shadow-lg ">
          <p className="m-auto">
            © {date} <span className="fw-bold">News Express</span> All rights
            reserved
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
