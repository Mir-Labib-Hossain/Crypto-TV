import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextArea from "../../components/textArea";
import TextInput from "../../components/textInput";
import { useAddVideoMutation } from "../../services/videoApi";

const Form = () => {
  const [addVideo, { isLoading, isError, isSuccess }] = useAddVideoMutation();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [views, setViews] = useState<number>(0);
  const [link, setLink] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addVideo({
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
    });
  };
  
  useEffect(() => {
    if (isSuccess) navigate(`/`);
  }, [isSuccess, navigate]);

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
            Add
          </button>
        </div>

        {/* <Success message="Video was added successfully" /> */}
      </div>
    </form>
  );
};

export default Form;
