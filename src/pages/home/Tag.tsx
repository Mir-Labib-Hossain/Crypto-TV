import { useAppDispatch } from "../../app/hooks";
import { addTag, removeTag } from "../../features/filterSlice";
import useDebounce from "../../hooks/useDebounce";

type Props = {
  active?: boolean;
  title: string;
};

const Tag = ({ active, title }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = useDebounce(() => {
    if (active) dispatch(removeTag(title));
    else dispatch(addTag(title));
    console.log(`Tag ${active ? "Removed" : "Added"}`);
  }, 200);

  return (
    <div className={`${active ? "bg-yellow-400 text-white" : "bg-yellow-100 text-yellow-500"} px-4 py-1 rounded-full cursor-pointer`} onClick={() => handleClick()}>
      {title}
    </div>
  );
};

export default Tag;
