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

export function logout() {
  return {
    type: "LOG_OUT",
  };
}
export function addtoconnect(user) {
  return {
    type: "CONNECT",
    payload: user,
  };
}
