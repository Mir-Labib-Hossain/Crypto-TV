import { useRelatedVideosQuery } from "../../services/videoApi";
import RelatedVideo from "./RelatedVideo";

type Props = {
  id: number;
  tags: string[];
  author?: string;
};

const RelatedVideos = ({ id, tags, author }: Props) => {
  const { data, isLoading, isError, error } = useRelatedVideosQuery({ videoId: id, tags, author });

  if (isLoading) return <h1>Loading</h1>;
  else if (isError) return <h1>{JSON.stringify(error)}</h1>;
  else if (data && data.length > 0)
    return (
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {data.map((relatedVideo: IVideo) => (
          <RelatedVideo relatedVideo={relatedVideo} key={relatedVideo.id} />
        ))}
      </div>
    );
  else return <h1>No Related Vieos Found</h1>;
};

export default RelatedVideos;
