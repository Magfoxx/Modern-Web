import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import styles from "./App.module.scss";

// Import des pages
import Home from "./pages/HomePage";
import Blog from "./pages/BlogPage";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Appelé à chaque changement de route */}
      <div className={`${styles.appContainer}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
