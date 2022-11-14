import LikeUnlike from "./LikeUnlike";

type Props = {
  id: number;
  title: string;
  date: string;
  description: string;
  likes: number;
  unlikes: number;
};

const Details = ({ id, title, date, description, likes, unlikes }: Props) => {
  console.log("Details");

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">{title}</h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">Uploaded on {date}</h2>

        {/* <!-- like/unlike --> */}
        <LikeUnlike id={id} prevLikes={likes} prevUnlikes={unlikes} />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-300">{description}</div>
    </div>
  );
};

export default Details;
