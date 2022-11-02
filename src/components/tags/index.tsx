import Tag from "../tag";

type Props = {};

const Tags = (props: Props) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        <Tag>React</Tag>
        <Tag active>Redux</Tag>
      </div>
    </section>
  );
};

export default Tags;
