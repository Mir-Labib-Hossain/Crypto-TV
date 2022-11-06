import LikeIcon from "../../assets/like.svg";
import UnikeIcon from "../../assets/unlike.svg";
import useNumFormatter from "../../hooks/useNumConverter";
type Props = {
  likes: number;
  unlikes: number;
};

const LikeUnlike = ({ likes, unlikes }: Props) => {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={LikeIcon} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{ useNumFormatter(likes)}</div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={UnikeIcon} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{ useNumFormatter(unlikes)}</div>
      </div>
    </div>
  );
};

export default LikeUnlike;
