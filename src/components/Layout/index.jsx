import { useState } from "react";
import Menu from "../Menu";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, setCurrentPage }) {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="w-screen relative flex flex-col justify-start items-center align-middle h-screen">
      {isMenu && <Menu />}
      <Navbar setIsMenu={setIsMenu} setCurrentPage={setCurrentPage} />
      {children}
      <Footer />
    </div>
  );
}
