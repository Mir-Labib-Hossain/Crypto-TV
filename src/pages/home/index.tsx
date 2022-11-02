import Pagination from "../../components/pagination";
import Tags from "../../components/tags";
import Videos from "../../components/videos";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Tags />
      <Videos />
      <Pagination />
    </>
  );
};

export default Home;
