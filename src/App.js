import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import JobBox from "./components/JobBox/JobBox";
import Vancancies from "./components/Vacancies/Vacancies"
function App() {
  return (
    <>
      <Header />
      <Banner />
      <JobBox />
      <Vancancies/>
      <Footer />
    </>
  );
}

export default App;
