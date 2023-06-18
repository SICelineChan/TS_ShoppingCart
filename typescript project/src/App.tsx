import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
