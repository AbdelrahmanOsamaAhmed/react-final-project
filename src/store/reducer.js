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
    default:
      return state;
  }
}
