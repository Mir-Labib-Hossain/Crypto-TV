import { useEffect, useState } from "react";
import LikeIcon from "../../assets/like.svg";
import UnikeIcon from "../../assets/unlike.svg";
import { useUpdateReactionMutation } from "../../services/videoApi";

type Props = {
  id: number;
  prevLikes: number;
  prevUnlikes: number;
};

const LikeUnlike = ({ id, prevLikes, prevUnlikes }: Props) => {
  const [updateReaction] = useUpdateReactionMutation();
  const [likes, setLikes] = useState(prevLikes);
  const [unlikes, setUnlikes] = useState(prevUnlikes);

  const handleUpdateReaction = async (type: string, currentNum: number) => {
    const response = await updateReaction({ videoId: id, type, currentNum }).unwrap();
    if (response) type === "like" ? setLikes(response.likes) : setUnlikes(response.unlikes);
  };

  useEffect(() => {
    setLikes(prevLikes);
    setUnlikes(prevUnlikes);
  }, [prevLikes, prevUnlikes]);

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
