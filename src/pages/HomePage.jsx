import FeatureMovies from "../components/FeatureMovies";
import MediaList from "../components/MediaList/MediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "../libs/contants";
function HomePage() {
  return (
    <>
      <FeatureMovies />
      <MediaList title={"Trending"} tabs={TRENDING_TABS} />
      <MediaList title={"Top Rated"} tabs={TOP_RATED_TABS} />
    </>
  );
}

export default HomePage;
