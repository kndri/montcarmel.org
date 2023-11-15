import HomePageHero from "../components/HomePageHero";
import MissionCallout from "../components/MissionCallout";
import LatestSermon from "../components/LatestSermon";
import Events from "../components/Events";

const Home = () => {
  return (
    <>
      <HomePageHero />
      <MissionCallout />
      <LatestSermon
        title="Arise and Shine"
        speaker="Pst. Freddy Shembo"
        thumbnailUrl="https://cdn.titanvest.com/images/marketing/careers/values-video-preview.png"
      />
      <Events />
    </>
  );
}

export default Home;
