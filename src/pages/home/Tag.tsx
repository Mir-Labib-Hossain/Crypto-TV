type Props = {
  active?: boolean;
  children: React.ReactNode;
};

const Tag = ({ active, children }: Props) => {
  return <div className={`${active ? "bg-yellow-400 text-white" : "bg-yellow-100 text-yellow-500"} px-4 py-1 rounded-full cursor-pointer`}>{children}</div>;
};

export default Tag;
