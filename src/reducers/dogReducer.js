const defaultState = {
  loading: false,
  allDogs: null
}

export default function rootReducer(state = defaultState, action){
  switch(action.type){
    case 'FETCH_ALL_DOGS':
      return {...state, loading: true, allDogs: action.payload}
    default:
      return state;
  }
};
