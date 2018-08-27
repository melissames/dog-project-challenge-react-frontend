const defaultState = {
  allDogsLoading: false,
  allDogs: null,
  dogLoading: false,
  dog: null,
  editDog: false
}

export default function rootReducer(state = defaultState, action){
  switch(action.type){
    case 'FETCH_ALL_DOGS':
      return {...state, allDogsLoading: true, allDogs: action.payload, dogId: null}
    case 'FETCH_DOG':
      return {...state, dogLoading: true, dog: action.payload}
    case 'EDIT_DOG_FORM':
      return {...state, editDog: true}  
    default:
      return state;
  }
};
