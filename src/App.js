import Navbar from "./Components/Navbar";
import Catagories from "./Components/Catagories";
import SectionImage from "./Components/Section-image";
import Recomended from "./Components/Recommended";
import Topics from "./Components/Topics";
import Popular from "./Components/Popular";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Catagories></Catagories>
      <SectionImage></SectionImage>
      <Recomended></Recomended>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  );
}

export default App;
