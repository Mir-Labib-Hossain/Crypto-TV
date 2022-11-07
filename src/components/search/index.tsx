import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { search } from "../../features/filterSlice";

const auseThrottle = (callback: any, delay = 1000) => {
  let shouldWait = false;
  let waitingArgs: any;
  const timeoutFunc = () => {
    if (waitingArgs == null) shouldWait = false;
    else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };
  return (...args: any) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    callback(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
};

const callThrottel = auseThrottle((fun: () => void) => fun());

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => e.target.value);
    callThrottel(() => {
      dispatch(search(e.target.value));
    });
  };

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <input className="outline-none border-none mr-2" type="search" name="search" placeholder="Search" value={input} onChange={handleChange} />
      <i className=" fa-solid fa-magnifying-glass cursor-pointer text-yellow-400"></i>
    </div>
  );
};

export default Search;
