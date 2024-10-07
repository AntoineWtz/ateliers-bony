import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { History } from "./pages/History";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
