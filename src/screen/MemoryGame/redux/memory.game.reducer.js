const initialState = {
  isLoading: false,
  userLoggedIn: '',
};

export default function memoryGameReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLoading: true,
        userLoggedIn: action.data,
      };

    case 'LogOut':
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
}
