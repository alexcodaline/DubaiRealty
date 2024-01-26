import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BlogPage from "./components/Pages/Blog/Blog";
import ContactPage from "./components/Pages/Contact/Contact";
import CategoryPage from "./components/Pages/Category/Catergory";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import ApartmentsPage from "./components/Pages/Apartments/Apartments";
import Preload from "./components/Preload/Preload";
import i18n from "../src/transition/i18n.js";
import { I18nextProvider } from "react-i18next";

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 1500);
  }, []);
  return (
    <>
      {contentLoaded ? (
        <Router>
          <I18nextProvider i18n={i18n}>
            <Header />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/blog" element={<BlogPage />} />
              <Route exact path="/contact" element={<ContactPage />} />
              <Route exact path="/category" element={<CategoryPage />} />
              <Route exact path="/apartments" element={<ApartmentsPage />} />
            </Routes>
            <Footer />
          </I18nextProvider>
        </Router>
      ) : (
        <Preload />
      )}
    </>
  );
}

export default App;
