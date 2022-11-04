import { useAppDispatch } from "../../app/hooks";
import { addTag, removeTag } from "../../features/filterSlice";

type Props = {
  active?: boolean;
  title: string;
};

const Tag = ({ active, title }: Props) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (active) dispatch(removeTag(title));
    else dispatch(addTag(title));
  };

  return (
    <div className={`${active ? "bg-yellow-400 text-white" : "bg-yellow-100 text-yellow-500"} px-4 py-1 rounded-full cursor-pointer`} onClick={handleClick}>
      {title}
    </div>
  );
};

export default Tag;
