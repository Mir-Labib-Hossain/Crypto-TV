import { memo } from "react";
import { useParams } from "react-router-dom";
import DescriptionLoader from "../../components/loaders/descriptionLoader";
import PlayerLoader from "../../components/loaders/playerLoader";
import Error from "../../components/status/error";
import { useVideoQuery } from "../../services/videoApi";
import Details from "./Details";
import RelatedVideos from "./RelatedVideos";
import VideoPlayer from "./VideoPlayer";

const Video = () => {
  const { videoId, author: authorParam } = useParams();

  const { data, isLoading, isError, error: errorMessage } = useVideoQuery({ videoId: videoId! }, { skip: !videoId });

  if (isLoading) {
    return (
      <>
        <PlayerLoader />
        <DescriptionLoader />
      </>
    );
  } else if (isError) {
    return <Error message={JSON.stringify(errorMessage)} />;
  } else if (data && data.id) {
    const { id, title, description, author, avatar, date, duration, views, link, thumbnail, tags, likes, unlikes } = data;
    console.log(data);

    return (
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer link={link} title={title} />
              <Details id={id} title={title} date={date} description={description} likes={likes} unlikes={unlikes} />
            </div>
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
              <RelatedVideos id={id} tags={tags} author={authorParam} />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <Error message="Something went wrong" />;
  }
};

export default memo(Video);
