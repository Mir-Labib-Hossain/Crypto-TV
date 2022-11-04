import { useTagsQuery } from "../../services/tagApi";
import Tag from "./Tag";

type Props = {};

const Tags = (props: Props) => {
  const { data, isLoading, error } = useTagsQuery();
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {data?.map((tag: ITag) => (
          <Tag>
            <>
              <i className="fa-brands fa-bitcoin mr-2" />
              BTC
            </>
          </Tag>
        ))}
        {/* <Tag active>
          <>
            <i className="fa-brands fa-ethereum mr-2" />
            ETH
          </>
        </Tag> 
        <Tag>
          <>
            <i className="fa-brands fa-viacoin mr-2"></i>
            VAC
          </>
        </Tag>
        */}
      </div>
    </section>
  );
};

export default Tags;
