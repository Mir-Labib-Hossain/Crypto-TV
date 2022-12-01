import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../components/status/error";
import TextArea from "../../components/textArea";
import TextInput from "../../components/textInput";
import { useEditVideoMutation } from "../../services/videoApi";

type Props = {
  data: IVideo;
};

const Form = ({ data }: Props) => {
  const { id, title: initialTitle, description: initialDescription, author: initialAuthor, avatar: initialAvatar, date: initialDate, duration: initialDuration, views: initialViews, link: initialLink, thumbnail: initialThumbnail, tags: initialTags } = data;

  const [editVideo, { isLoading, isError, isSuccess }] = useEditVideoMutation();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>(initialTitle);
  const [description, setDescription] = useState<string>(initialDescription);
  const [author, setAuthor] = useState<string>(initialAuthor);
  const [avatar, setAvatar] = useState<string>(initialAvatar);
  const [date, setDate] = useState<string>(initialDate);
  const [duration, setDuration] = useState<string>(initialDuration);
  const [views, setViews] = useState<number>(initialViews);
  const [link, setLink] = useState<string>(initialLink);
  const [thumbnail, setThumbnail] = useState<string>(initialThumbnail);
  const [tags, setTags] = useState<string>(initialTags.join(", "));

  const handleSubmit = (event: any) => {
    event.preventDefault();
    editVideo({
      videoId: id,
      data: {
        title,
        description,
        author,
        avatar,
        date,
        duration,
        views,
        link,
        thumbnail,
        tags: tags.split(", "),
      },
    });
  };

  useEffect(() => {
    if (isSuccess) navigate(`/videos/${id}`);
  }, [id, isSuccess, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput title="Video Title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput title="Author" value={author} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)} />
            </div>

            <div className="col-span-6">
              <TextArea title="Description" value={description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} />
            </div>

            <div className="col-span-6">
              <TextInput title="Tags" value={tags} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)} placeholder="Ex: BTC, ETH, How to, Crypto" />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="YouTube Video link" value={link} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value)} />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="Thumbnail link" value={thumbnail} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setThumbnail(e.target.value)} />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="Author avatar link" value={avatar} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAvatar(e.target.value)} />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="Upload Date" value={date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)} />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput title="Video Duration" value={duration} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDuration(e.target.value)} />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput title="Video no of views" value={views} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setViews(parseInt(e.target.value))} type="number" />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" disabled={isLoading} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500">
            Update
          </button>
        </div>

        {isError && <Error message="There was a problem while updating video details." />}
      </div>
    </form>
  );
};

export default Form;
