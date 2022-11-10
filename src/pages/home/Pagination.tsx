type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
};

const Pagination = ({ currentPage, totalPage, setCurrentPage }: Props) => {
  let paginations: JSX.Element[] = [];
  for (let i = 1; i <= totalPage; i++) {
    paginations.push(
      <div onClick={() => setCurrentPage(i)} className={`bg-yellow-${currentPage === i ? "400 text-white" : "100 text-yellow-500"} px-4 py-1 rounded-full cursor-pointer`} key={i}>
        {i}
      </div>
    );
  }
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">{paginations}</div>
    </section>
  );
};

export default Pagination;
