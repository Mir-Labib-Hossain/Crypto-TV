import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import { useDeleteVideoMutation } from "../../services/videoApi";

type Props = {
  id: number;
};

const EditDeleteBtn = ({ id }: Props) => {
  const [deleteVideo, { isSuccess, isLoading }] = useDeleteVideoMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, isLoading, navigate]);

  return (
    <div className="flex gap-6 w-full justify-end">
      <div className="flex gap-1">
        <Link to={`/videos/edit/${id}`}>
          <div className="shrink-0">
            <img className="w-5 block" src={editIcon} alt="Edit" />
          </div>
          <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">Edit</span>
        </Link>
      </div>
      <div className="flex gap-1" onClick={() => deleteVideo({ videoId: id })}>
        <div className="shrink-0">
          <img className="w-5 block" src={deleteIcon} alt="Delete" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">Delete</div>
      </div>
    </div>
  );
};

export default EditDeleteBtn;
