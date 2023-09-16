import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import HomePageHero from "./components/HomePageHero";
import MissionCallout from "./components/MissionCallout";
import LatestSermon from "./components/LatestSermon";

function App() {
  return (
    <>
      <Header transparent />
      <HomePageHero />
      <MissionCallout />
      <LatestSermon />
    </>
  );
}

export default App;
