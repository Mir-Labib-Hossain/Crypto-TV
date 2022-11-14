import { useAppDispatch } from "../../app/hooks";
import { addTag, removeTag, reset } from "../../features/filterSlice";
import useDebounce from "../../hooks/useDebounce";

type Props = {
  active?: boolean;
  title: string;
};

const Tag = ({ active, title }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = useDebounce(() => {
    if (title === "Reset") {
      dispatch(reset());
    } else {
      if (active) dispatch(removeTag(title));
      else dispatch(addTag(title));
    }
  }, 200);

  return (
    <div className={`${title === "Reset" ? "bg-red-500 text-white" : active ? "bg-yellow-400 text-white" : "bg-yellow-100 text-yellow-500"} px-4 py-1 rounded-full cursor-pointer`} onClick={() => handleClick()}>
      {title}
    </div>
  );
};

export default Tag;
