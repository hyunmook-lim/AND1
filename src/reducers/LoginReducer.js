function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "TESTLOGIN":
      return { ...state, testLogin: action.testLogin };
    default:
      return state;
  }
}

const initialState = { testLogin: false };

export { LoginReducer, initialState };
