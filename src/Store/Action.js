export default function login(user) {
    return {
      type: "LOGIN",
      payload: user,
    };
  }
  
  export function signup(user) {
      return {
        type: "SIGN_UP",
        payload: user,
      };
  }
  
  export function logout(user) {
      return {
        type: "LOG_OUT",
        payload: user,
      };
  }

  export function addtoconnect(user) {
    return {
      type: "CONNECT",
      payload: user,
    };
}