import { useAppSelector } from "../../app/hooks";
import { useVideosQuery } from "../../services/videoApi";
import Pagination from "./Pagination";
import VideoCard from "./VideoCard";

const VideoCards = () => {
  const { selectedTags, searched, currentPage } = useAppSelector((state) => state.filter);
  const { data } = useVideosQuery({ selectedTags, searched });

  const number = 8; // number to show in a single page
  const start = currentPage * number - number;
  const end = currentPage * number;

  return (
    <>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {data?.slice(start, end).map((details: IVideo) => (
              <VideoCard details={details} key={details.id} />
            ))}
          </div>
        </section>
      </section>
      {data && data.length > number && <Pagination currentPage={currentPage} totalPage={Math.ceil(data.length / number)} />}
    </>
  );
};

export default VideoCards;
