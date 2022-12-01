type Props = {
  title: string;
};

const TextInput = ({ title, ...rest }: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <input type="text" {...rest} required className="mt-1 py-3 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
    </>
  );
};

export default TextInput;
