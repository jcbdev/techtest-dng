export const countDuplicates = (input: string, ignoreCase: boolean, ignoreWhitespace: boolean) => {
  const counts: Record<string, number> = {};
  // Remove whitespace and lowercase the string if the options are supplied
  let cleanedInput = (ignoreCase ? input.toLowerCase() : input);
  cleanedInput = (ignoreWhitespace ? cleanedInput.replace(/\s/g, "") : cleanedInput);
  // Create count object from each letters frequency
  cleanedInput.split('').forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  // filter letters of less than 2 frequency (not duplicates) and return a new object with the remaining letters
  return Object.entries(counts).filter(([letter, count]) => count > 1).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {}
  );
}