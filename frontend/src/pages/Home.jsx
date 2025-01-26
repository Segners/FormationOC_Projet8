import Banner from "../components/Banner/Banner";
import Apprtements from "../components/AppartementsList/AppartementsList";
import "../components/Css/style.css";
import bgImage from "../assets/bg1.jpg";

function Home() {
  return (
    <>
      <Banner backgroundImage={bgImage} showText={true} />
      <Apprtements />
    </>
  );
}

export default Home;
