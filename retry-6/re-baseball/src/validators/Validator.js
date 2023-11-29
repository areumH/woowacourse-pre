import { BASEBALL } from "../constants/constants.js";

const Validator = {
  checkIsNotInteger(input) {
    return isNaN(input);
  },

  checkNumberLength(input) {
    return input.length !== BASEBALL.LENGTH;
  },

  checkDuplicates(input)  {
    return new Set(input).size !== BASEBALL.LENGTH;
  }
};

export default Validator;
