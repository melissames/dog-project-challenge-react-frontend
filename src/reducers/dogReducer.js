const defaultState = {
  allDogsLoading: false,
  allDogs: null,
  dogLoading: false,
  dog: null
}

export default function rootReducer(state = defaultState, action){
  switch(action.type){
    case 'FETCH_ALL_DOGS':
      return {...state, allDogsLoading: true, allDogs: action.payload, dogId: null}
    case 'FETCH_DOG':
      return {...state, dogLoading: true, dog: action.payload}
    default:
      return state;
  }
};
