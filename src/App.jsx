import { useState } from "react";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [currentPage, setCurrentPage] = useState("HOME");

  return (
    <Layout setCurrentPage={setCurrentPage}>
      {currentPage === "HOME" && <Home />}
      {currentPage === "ABOUT" && <About />}
    </Layout>
  );
}

export default App;
