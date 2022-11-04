import { useAppSelector } from "../../app/hooks";
import { useTagsQuery } from "../../services/tagApi";
import Tag from "./Tag";

const Tags = () => {
  const { data } = useTagsQuery();
  const selectedTags: string[] = useAppSelector((state) => state.filter.selectedTags);

  if (data && data.length > 0)
    return (
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {data.map((tag: ITag) => (
            <Tag active={selectedTags.includes(tag.title)} title={tag.title} key={tag.id} />
          ))}
        </div>
      </section>
    );
  else return <h1></h1>;
};

export default Tags;
