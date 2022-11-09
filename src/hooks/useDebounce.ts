const useDebounce = (callback: any, delay: number=1000) => {
  let timeout: any;
  return (args?: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(args);
    }, delay);
  };
};
export default useDebounce;
