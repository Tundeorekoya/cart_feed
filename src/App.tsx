import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Store from "./components/store";
import About from "./components/about";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
