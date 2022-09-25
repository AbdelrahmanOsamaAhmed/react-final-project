let initialState = {
  user: {},
  status: false,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        status: true,
      };
    case "SIGN_UP":
      return {
        ...state,
        user: action.payload,
        status: true,
      };
    case "LOG_OUT":
      return {
        user: {},
        status: false,
      };
    default:
      return state;
  }
}
