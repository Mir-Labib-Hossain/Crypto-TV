import Pagination from "./Pagination";
import Tags from "./Tags";
import VideoCards from "./VideoCards";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Tags />
      <VideoCards />
      <Pagination />
    </>
  );
};

export default Home;
