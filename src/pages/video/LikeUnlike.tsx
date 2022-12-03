import LikeIcon from "../../assets/like.svg";
import UnikeIcon from "../../assets/unlike.svg";
import { useUpdateReactionMutation } from "../../services/videoApi";

type Props = {
  id: number;
  likes: number;
  unlikes: number;
};

const LikeUnlike = ({ id, likes, unlikes }: Props) => {
  const [updateReaction] = useUpdateReactionMutation();

  const handleUpdateReaction = (type: string, currentNum: number) => {
    updateReaction({ videoId: id, type, currentNum }).unwrap();
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0 cursor-pointer " onClick={() => handleUpdateReaction("like", likes)}>
          <img className="w-5 block" src={LikeIcon} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0 cursor-pointer " onClick={() => handleUpdateReaction("unlike", unlikes)}>
          <img className="w-5 block" src={UnikeIcon} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
      </div>
    </div>
  );
};

export default LikeUnlike;
