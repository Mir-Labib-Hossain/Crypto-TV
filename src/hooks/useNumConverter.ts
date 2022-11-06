const useNumFormatter = (num: number) => {
  var suffixes = ["", "k", "m", "b", "t"];
  var suffixNum = Math.floor(("" + num).length / 3);
  var shortValue = parseFloat((suffixNum !== 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(2));
  if (shortValue % 1 !== 0) {
    return shortValue.toFixed(1) + suffixes[suffixNum];
  }
  return shortValue + suffixes[suffixNum];
};
export default useNumFormatter;
