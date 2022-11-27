import RelatedVideoLoader from "../../components/loaders/relatedVideoLoader";
import Error from "../../components/status/error";
import { useRelatedVideosQuery } from "../../services/videoApi";
import RelatedVideo from "./RelatedVideo";

type Props = {
  id: number;
  tags: string[];
  author?: string;
};

const RelatedVideos = ({ id, tags, author }: Props) => {
  const { data, isLoading, isError, error: errorMessage } = useRelatedVideosQuery({ videoId: id, tags, author });
  let content: IContent;

  if (isLoading) {
    content = (
      <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
      </>
    );
  } else if (isError) {
    content = <Error message={JSON.stringify(errorMessage)} />;
  } else if (data && data.length > 0) {
    content = (
      <>
        {data.map((relatedVideo: IVideo) => (
          <RelatedVideo relatedVideo={relatedVideo} key={relatedVideo.id} />
        ))}
      </>
    );
  } else {
    content = <Error message="No Related Vieos Found" />;
  }

  return content;
};

export default RelatedVideos;
