import { useAppSelector } from "../../app/hooks";
import Error from "../../components/error";
import { useTagsQuery } from "../../services/tagApi";
import Tag from "./Tag";

const Tags = () => {
  const { data } = useTagsQuery();
  const selectedTags: string[] = useAppSelector((state) => state.filter.selectedTags);

  if (data && data.length > 0)
    return (
      <section className="max-w-7xl mx-auto flex justify-between border-b ">
        <div className=" px-5 py-6 lg:px-0 flex gap-2  overflow-y-auto ">
          {data.map((tag: ITag) => (
            <Tag active={selectedTags.includes(tag.title)} title={tag.title} key={tag.id} />
          ))}
        </div>
        <div className="px-5 py-6 lg:px-0 flex   overflow-y-auto">
          <Tag title="Reset" />
        </div>
      </section>
    );
  else return <Error />;
};

export default Tags;
