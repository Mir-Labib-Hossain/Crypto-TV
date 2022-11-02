import RelatedVideo from "./RelatedVideo";

type Props = {};

const RelatedVideos = (props: Props) => {
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      <RelatedVideo />
      <RelatedVideo />
      <RelatedVideo />
    </div>
  );
};

export default RelatedVideos;
