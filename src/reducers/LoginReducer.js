function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGININFO":
      return { email: action.email, password: action.password };
    default:
      return state;
  }
}

const initialState = { loginInfo: false };

export { LoginReducer, initialState };
