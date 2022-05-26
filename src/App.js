import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import JobBox from "./components/JobBox/JobBox";
import Career from "./components/Career/Career";
import Sliders from "./components/Slider/Slider";
import Vancancies from "./components/Vacancies/Vacancies";
import Career2 from "./components/Career2/Career";
import CareerVideo from "./components/CareerVideo/CareerVideo";
import Helmet from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <title>Tuyển dụng - Diligo</title>
      </Helmet>
      <Header />
      <Sliders />
      <JobBox />
      <Career2 />
      <Vancancies />
      <CareerVideo />
      <Career />
      <Footer />
    </>
  );
}

export default App;
