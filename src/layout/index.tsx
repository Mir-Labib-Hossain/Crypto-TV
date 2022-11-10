import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={"Loading"}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
