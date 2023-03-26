import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Error } from "./Pages";
import { Navbar, Footer } from "./Components";

const App = () => {
  const aboutRef = useRef(null);
  const rulesRef = useRef(null);
  const teamRef = useRef(null);
  return (
    <>
      <Navbar aboutRef={aboutRef} teamRef={teamRef} />
      <Routes>
        <Route
          path="/"
          element={<Home aboutRef={aboutRef} rulesRef={rulesRef} teamRef={teamRef} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
