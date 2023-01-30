import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
export default DefaultLayout;
