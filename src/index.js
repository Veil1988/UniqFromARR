const firstList = [1, 2, 2, 2, 4]; // odd
const secondList = [2, 1, 1, 1, 3]; // even
const thirdList = [1, 2, 2, 2, 2, 1]; // not odd and even
const fourList = [1, 2]; // not odd and even
const fiveList = [2]; // not odd and even
const sixList = []; // not odd and even
const seven = [0.5, 2, 2]; // odd
const last = [Infinity, NaN, 0]; // not odd and even

const yourFunc = (list) => {
  // DO SOMTHING
};

yourFunc(firstList); // odd
yourFunc(secondList); // even
yourFunc(thirdList); // not odd and not even
yourFunc(fourList); // not odd and not even
yourFunc(fiveList); // not odd and not even
yourFunc(sixList); // not odd and not even
yourFunc(seven); // odd
yourFunc(last); // not odd and even
