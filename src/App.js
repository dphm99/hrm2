import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import JobBox from "./components/JobBox/JobBox";
import Sliders from "./components/Slider/Slider";

function App() {
  return (
    <>
      <Header />
      <Sliders />
      {/* <Banner /> */}
      <JobBox />
      <Footer />
    </>
  );
}

export default App;
