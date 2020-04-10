export function requestUserExist() {
  return {
    type: '@login/REQUEST_USER_EXIST',
  };
}
export function requestLogin(email, password) {
  return {
    type: '@login/REQUEST_LOGIN',
    payload: {
      email,
      password,
    },
  };
}
export function requestRegisterUser(
  name,
  phone,
  email,
  password,
  confirmPassword
) {
  return {
    type: '@login/REQUEST_REGISTER_USER',
    payload: {
      name,
      phone,
      email,
      password,
      confirmPassword,
    },
  };
}
