import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import useNumFormatter from "../../hooks/useNumConverter";

type Props = {
  relatedVideo: IVideo;
};

const RelatedVideo = ({ relatedVideo }: Props) => {
  const { id, title, author, date, duration, views, thumbnail } = relatedVideo;
  return (
    <div className="w-full flex flex-row gap-2 items-center mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to={`/videos/${id}`}>
          <LazyLoadImage className="object-cover" effect="blur" src={thumbnail} alt={title} loading="lazy" />
        </Link>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">{duration}</p>
      </div>
      <div className="flex flex-col w-full">
        <Link to={`/videos/${id}`}>
          <p className="text-slate-900 text-sm font-semibold">{title}</p>
        </Link>
        <Link to={`/videos/${id}/${author}`} className="text-gray-400 text-xs mt-2 hover:text-gray-600">
          {author}
        </Link>
        <p className="text-gray-400 text-xs mt-1">
          {useNumFormatter(views)} views . {date}
        </p>
      </div>
    </div>
  );
};

export default RelatedVideo;
