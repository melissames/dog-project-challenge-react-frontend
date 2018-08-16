const URL = 'http://localhost:3000'

export let fetchAllDogs = () => {
  return dispatch => {
    return fetch(`${URL}/dogs.json`)
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_ALL_DOGS', payload: json}))
  }
}
