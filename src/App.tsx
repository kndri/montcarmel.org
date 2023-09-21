import "./App.css";
import Header from "./components/Header";
import HomePageHero from "./components/HomePageHero";
import MissionCallout from "./components/MissionCallout";
import LatestSermon from "./components/LatestSermon";
import Footer from "./components/Footer";
import Events from "./components/Events";

function App() {
  return (
    <>
      <Header transparent />
      <HomePageHero />
      <MissionCallout />
      <LatestSermon
        title="Arise and Shine"
        speaker="Pst. Freddy Shembo"
        thumbnailUrl="https://cdn.titanvest.com/images/marketing/careers/values-video-preview.png"
      />
      <Events />
      <Footer />
    </>
  );
}

export default App;
