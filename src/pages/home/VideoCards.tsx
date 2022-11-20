import { useAppSelector } from "../../app/hooks";
import VideoLoader from "../../components/loaders/videoLoader";
import Error from "../../components/status/error";
import { useVideosQuery } from "../../services/videoApi";
import Pagination from "./Pagination";
import VideoCard from "./VideoCard";

const VideoCards = () => {
  const { selectedTags, searched, currentPage } = useAppSelector((state) => state.filter);
  const { data, isLoading, isError, error: errorMessage } = useVideosQuery({ selectedTags, searched });

  const limit = 8; // limit to show in a single page
  const start = currentPage * limit - limit;
  const end = currentPage * limit;

  let content: JSX.Element | JSX.Element[];

  if (isLoading) {
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  } else if (isError) {
    content = <Error message={JSON.stringify(errorMessage)} />;
  } else if (data && data.length > 0) {
    content = data?.slice(start, end).map((details: IVideo) => <VideoCard details={details} key={details.id} />);
  } else {
    content = <Error message="No video found!" />;
  }
  return (
    <>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">{content}</div>
        </section>
      </section>
      {data && data.length > limit && <Pagination currentPage={currentPage} totalPage={Math.ceil(data.length / limit)} />}
    </>
  );
};

export default VideoCards;
