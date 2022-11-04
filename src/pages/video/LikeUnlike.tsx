import Like from "../../assets/like.svg";
import Unike from "../../assets/unlike.svg";
type Props = {
  likes: number;
  unlikes: number;
};

const LikeUnlike = ({ likes, unlikes }: Props) => {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={Like} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={Unike} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
      </div>
    </div>
  );
};

export default LikeUnlike;
