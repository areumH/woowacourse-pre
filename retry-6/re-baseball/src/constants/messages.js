const INPUT_MESSAGE = Object.freeze({
  NUMBER_MESSAGE: "숫자를 입력해주세요 : ",
  WIN_MESSAGE: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART_MESSAGE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

const OUTPUT_MESSAGE = Object.freeze({
  START_MESSAGE: "숫자 야구 게임을 시작합니다.",
})

const ERROR_MESSAGE = Object.freeze({
  INVALID_INTEGER: "[ERROR] 숫자 형식이 아닙니다.",
  INVALID_LENGTH: "[ERROR] 입력 값은 3자리의 숫자여야 합니다.",
  HAS_DUPLICATES: "[ERROR] 중복된 숫자가 존재합니다.",
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
