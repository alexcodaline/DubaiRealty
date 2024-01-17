import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from "./components/Pages/Blog/Blog";
import ContactPage from "./components/Pages/Contact/Contact";
import CategoryPage from "./components/Pages/Category/Catergory";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
