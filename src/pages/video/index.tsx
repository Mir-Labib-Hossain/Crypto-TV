import { useParams } from "react-router-dom";
import Error from "../../components/error";
import { useVideoQuery } from "../../services/videoApi";
import Details from "./Details";
import RelatedVideos from "./RelatedVideos";
import VideoPlayer from "./VideoPlayer";

const Video = () => {
  const { videoId } = useParams();

  const { data, isLoading, error } = useVideoQuery({ videoId: videoId! }, { skip: !videoId });
  if (isLoading) {
    return <h1>Loading</h1>;
  } else if (data) {
    const { id, title, description, author, avatar, date, duration, views, link, thumbnail, tags, likes, unlikes } = data;
    return (
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer link={link} title={title} />
              <Details title={title} date={date} description={description} likes={likes} unlikes={unlikes} />
            </div>
            <RelatedVideos />
          </div>
        </div>
      </section>
    );
  } else {
    return <Error />;
  }
};

export default Video;
