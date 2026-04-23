import Footer from "@/components/common/Footer";
import NavbarOne from "@/components/layout/NavbarOne";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <NavbarOne/>
      {children}
      <Footer />
    </>
  );
};

export default layout;
