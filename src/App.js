import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import JobBox from "./components/JobBox/JobBox";
import Career from "./components/Career/Career";
import Sliders from "./components/Slider/Slider";

import Vancancies from "./components/Vacancies/Vacancies"
function App() {
  return (
    <>
      <Header />
      <Banner />
      <JobBox />
      <Career />
      <Vancancies/>
      <Footer />
    </>
  );
}

export default App;
