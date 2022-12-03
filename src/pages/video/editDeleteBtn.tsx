import { Link } from "react-router-dom";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";

type Props = {
  id: number;
};

const EditDeleteBtn = ({ id }: Props) => {
  return (
    <div className="flex gap-6 w-full justify-end">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={editIcon} alt="Edit" />
        </div>
        <Link to={`/videos/edit/${id}`}>
          <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">Edit</span>
        </Link>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={deleteIcon} alt="Delete" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">Delete</div>
      </div>
    </div>
  );
};

export default EditDeleteBtn;
