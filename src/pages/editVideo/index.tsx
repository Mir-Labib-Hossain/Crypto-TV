import { useParams } from "react-router-dom";
import Error from "../../components/status/error";
import { useVideoQuery } from "../../services/videoApi";
import Form from "./form";

const EditVideo = () => {
  const { videoId } = useParams();
  const { data, isSuccess } = useVideoQuery({ videoId: videoId! }, { skip: !videoId });
  let content: IContent;
  if (isSuccess) content = <Form data={data} />;
  else content = <Error message="Failed to edit" />;
console.log(videoId);

  return (
    <div className="max-w-7xl mx-auto p-5 lg:px-0">
      <div className="w-full">
        <div className="px-4 sm:px-0 pb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Edit video</h3>
          <p className="mt-1 text-sm text-gray-600">Please fillup the form to edit video</p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">{content}</div>
      </div>
    </div>
  );
};

export default EditVideo;
