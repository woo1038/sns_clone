import produce from "immer";

export const initialState = {
  login: false,
};

/* 변수 */
export const LOGIN = "LOG_IN";

export const loginAction = (data) => {
  return {
    type: LOGIN,
    data,
  };
};

const reducer = (state = initialState, action) => {
  console.log("hello");
  return produce(state, (draft) => {
    switch (action.type) {
      // 로그인
      case LOGIN:
        draft.login = true;
        break;

      default:
        return state;
    }
  });
};

export default reducer;
