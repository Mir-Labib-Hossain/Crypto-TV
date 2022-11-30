import { forwardRef } from "react";

type Props = {
  title: string;
  [attributes: string]: any;
};

const TextInput = forwardRef(({ title, attributes }: Props, ref: any) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <input type="text" {...attributes} ref={ref} required className="mt-1 py-3 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
    </>
  );
});

export default TextInput;
