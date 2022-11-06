import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { search } from "../../features/filterSlice";
import useDebounce from "../../hooks/useDeboumce";

const Search = () => {
  const [input, setInput] = useState("");

  const dispatch = useAppDispatch();
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inp = e.target.value;
    setInput(() => e.target.value);
    console.log("handlechange");
    function getData() {
      dispatch(search(inp));
      console.log("Debounced");
    }
    useDebounce(getData, 300);
  };

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <input className="outline-none border-none mr-2" type="search" name="search" placeholder="Search" value={input} onChange={HandleChange} />
      <i className=" fa-solid fa-magnifying-glass cursor-pointer text-yellow-400"></i>
    </div>
  );
};

export default Search;
