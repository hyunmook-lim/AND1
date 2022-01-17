function ProgressReducer(state = initialState, action) {
  switch (action.type) {
    case "PROGRESS":
      return {
        progress: action.progress,
      };
    default:
      return state;
  }
}

const initialState = { progress: false };

export { ProgressReducer, initialState };
