import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { search } from "../../features/filterSlice";

const Search = () => {
  const [input, setInput] = useState("");
  const ss = useAppSelector((state) => state.filter.searched);
  console.log(ss);

  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => e.target.value);
    dispatch(search(e.target.value));
  };

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <input className="outline-none border-none mr-2" type="search" name="search" placeholder="Search" value={input} onChange={handleChange} />
      <i className=" fa-solid fa-magnifying-glass cursor-pointer text-yellow-400"></i>
    </div>
  );
};

export default Search;
