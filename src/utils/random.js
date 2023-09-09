// this function will return a randomNumber based on
// the maxNumber passed as an argument
// if nonZero = true, then 0 is not included while returning the random value
// if nonZero = false, then 0 is included in the random value
export const generateRandomNumber = (maxNumber, nonZero) =>
  Math.floor(Math.random() * maxNumber + (nonZero ? 1 : 0));

// this function will return a randomArray
// maxNumber: number till the random number will be generated
// lengthOfRandomArray: what is the expected length of randomArray
export const getRandomArray = (lengthOfRandomArray, maxNumber) => {
  const randomArray = [];
  const rFunc = () => {
    let a = generateRandomNumber(maxNumber, true);
    if (!randomArray.includes(a)) {
      randomArray.push(a);
    }
  };
  while (randomArray.length < lengthOfRandomArray) {
    rFunc();
  }
  return randomArray;
};

export const getRandomArrayOptionsIncludingANumber = (numberToBeIncluded) => {
  const optionsArray = getRandomArray(4, numberToBeIncluded + 4); // + 4, because if the number is 1 it should have 4 options

  if (!optionsArray.includes(numberToBeIncluded)) {
    let anumber = generateRandomNumber(3, false);
    optionsArray.splice(anumber, 1, numberToBeIncluded);
  }

  return optionsArray;
};
