import About from "./components/About/About";
import Articles from "./components/Articles/Articles";
import Clients from "./components/Clients/Clients";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Title from "./components/Title/Title";

function App() {
  return (
    <div>
      <Header />
      <Title />
      <Projects />
      <About />
      <Articles />
      <Clients />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
