import Footer from "@/components/customui/Footer";
import Header from "@/components/customui/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function Dashboardlayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Dashboardlayout;
