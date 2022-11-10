import { useAppDispatch } from "../../app/hooks";
import { search } from "../../features/filterSlice";
import useThrottle from "../../hooks/useThrottle";

const Search = () => {
  const dispatch = useAppDispatch();

  const handleChange = useThrottle((inputText: string) => {
    dispatch(search(inputText));
    console.log("Fetching : ", inputText);
  });

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <input className="outline-none border-none mr-2" type="search" name="search" placeholder="Search" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)} />
      <i className=" fa-solid fa-magnifying-glass cursor-pointer text-yellow-400"></i>
    </div>
  );
};

export default Search;
