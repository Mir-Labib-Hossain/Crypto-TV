import { useAppSelector } from "../../app/hooks";
import { useVideosQuery } from "../../services/videoApi";
import VideoCard from "./VideoCard";

type Props = {};

const VideoCards = (props: Props) => {
  const { selectedTags, searched } = useAppSelector((state) => state.filter);
  const { isLoading, data, error } = useVideosQuery({ selectedTags, searched });

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {data?.map((details: IVideo) => (
            <VideoCard details={details} key={details.id} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default VideoCards;
