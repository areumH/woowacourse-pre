const INPUT_MESSAGE = Object.freeze({
  NUMBER_MESSAGE: "숫자를 입력해주세요 : ",
  RESTART_MESSAGE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  START_MESSAGE: "숫자 야구 게임을 시작합니다.",
  WIN_MESSAGE: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",

  STRIKE: (strike) => `${strike}스트라이크`,
  BALL: (ball) => `${ball}볼`,
  BOTH: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
  NONE: "낫싱",
})

const ERROR_MESSAGE = Object.freeze({
  INVALID_INTEGER: "[ERROR] 숫자 형식이 아닙니다.",
  INVALID_LENGTH: "[ERROR] 입력 값은 3자리의 숫자여야 합니다.",
  HAS_DUPLICATES: "[ERROR] 중복된 숫자가 존재합니다.",
  INVALID_RANGE: "[ERROR] 올바른 숫자가 아닙니다.",
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };

