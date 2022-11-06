let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
};

const debounce = (func: any, delay: number = 300) => {
  console.log("inside useDebounce()");

  let timer: any;
  return function (this: unknown, ...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const useDebounce = debounce(getData, 300);

export default useDebounce;
