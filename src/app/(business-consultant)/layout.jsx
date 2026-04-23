import FooterOne from "@/components/layout/FooterOne";
import NavbarOne from "@/components/layout/NavbarOne";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <NavbarOne/>
      {children}
      <FooterOne />
    </>
  );
};

export default layout;
