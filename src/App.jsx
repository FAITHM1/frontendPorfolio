import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Projects";

import About from "./pages/About";
function App() {
  const URL = "https://fm-backendserver.herokuapp.com/";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Project url={URL} />} />
        <Route exact path="/about" element={<About url={URL} />} />
     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
