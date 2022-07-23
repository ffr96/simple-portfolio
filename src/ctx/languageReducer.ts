export const simpleReducer = (
  _state: string,
  action: { type: string; value: string }
) => {
  switch (action.type) {
    case 'GET_LANGUAGE':
      return localStorage.getItem('lang');
    case 'SET_LANGUAGE':
      localStorage.setItem('lang', action.value);
      return action.value;
    default:
      return action.type;
  }
};
