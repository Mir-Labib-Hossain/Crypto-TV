type Props = {};

const Search = (props: Props) => {
  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form>
        <input className="outline-none border-none mr-2" type="search" name="search" placeholder="Search" />
      </form>
      <i className=" fa-solid fa-magnifying-glass cursor-pointer text-yellow-400"></i>
    </div>
  );
};

export default Search;
