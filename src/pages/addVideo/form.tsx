import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import TextArea from "../../components/textArea";
import TextInput from "../../components/textInput";
import { useAddVideoMutation } from "../../services/videoApi";

type Props = {};

const Form = (props: Props) => {
  const [addVideo] = useAddVideoMutation();

  const navigate = useNavigate();

  const title = useRef<HTMLInputElement>();
  const description = useRef<HTMLInputElement>();
  const author = useRef<HTMLInputElement>();
  const avatar = useRef<HTMLInputElement>();
  const date = useRef<HTMLInputElement>();
  const duration = useRef<HTMLInputElement>();
  const views = useRef<HTMLInputElement>();
  const link = useRef<HTMLInputElement>();
  const thumbnail = useRef<HTMLInputElement>();
  const tags = useRef<HTMLInputElement>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response: any = await addVideo({
      title: title.current?.value || "",
      description: description.current?.value || "",
      author: author.current?.value || "",
      avatar: avatar.current?.value || "",
      date: date.current?.value || "",
      duration: duration.current?.value || "",
      views: views.current?.value ? parseInt(views.current.value) : 0,
      link: link.current?.value || "",
      thumbnail: thumbnail.current?.value || "",
      tags: tags.current?.value.split(", ") || [],
    });

    if (response.data) navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput title="Video Title" ref={title} />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput title="Author" ref={author} />
            </div>

            <div className="col-span-6">
              <TextArea title="Description" ref={description} />
            </div>
            <div className="col-span-6">
              <TextInput title="Tags" ref={tags} placeholder="Ex: BTC, ETH, How to, Crypto" />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="YouTube Video link" ref={link} />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="Thumbnail link" ref={thumbnail} />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="Author avatar link" ref={avatar} />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="Upload Date" ref={date} />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput title="Video Duration" ref={duration} />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput title="Video no of views" ref={views} type="number" />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500">
            Save
          </button>
        </div>

        {/* <Success message="Video was added successfully" /> */}
      </div>
    </form>
  );
};

export default Form;
