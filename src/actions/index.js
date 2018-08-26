const URL = 'http://localhost:3000'

export let fetchAllDogs = () => {
  return dispatch => {
    return fetch(`${URL}/dogs.json`)
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_ALL_DOGS', payload: json}))
  }
}

export let fetchDog = id => {
  return dispatch => {
    return fetch(`${URL}/dogs/${id}.json`)
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_DOG', payload: json}))
  }
}

export let editDogForm = () => {
  return dispatch => {
    dispatch({type: 'EDIT_DOG_FORM', payload: null})
  }
}

// export let editDog = id => {
//   return dispatch => {
//     return fetch(`${URL}/dogs/${id}`{
//       method: 'POST',
//     })
//   }
// }
