type Props = {
  active?: boolean;
  children: string;
};

const Tag = ({ active, children }: Props) => {
  return <div className={`${active ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"} px-4 py-1 rounded-full cursor-pointer`}>{children}</div>;
};

export default Tag;
