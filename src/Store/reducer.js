let initialState = {
  user: {},
  status: false,
  connections: [],
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
    case "CONNECT":
      let isconn = state.connections.findIndex(
        (con) => con.id == action.payload.id
      );
      if (isconn == -1) {
        state.connections.push(action.payload);
      }
      return state;
    default:
      return state;
  }
}
