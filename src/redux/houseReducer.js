import axios from 'axios'
const initialState = {
  houses: [],
  loading: false,
  errorMessage: ''
}

const GET_HOUSES = 'GET_HOUSES'
const PENDING = '_PENDING'
const FULFILLED = '_FULFILLED'
const REJECTED = '_REJECTED'

export function getHouses(){
  const houses = axios.get('/api/houses').then(results => results.data)
  .catch(err => console.log(err))
  return {
    type: GET_HOUSES,
    payload: houses
  }
}

export default function houseReducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    case GET_HOUSES + PENDING:
      return {...state, loading: true}
    case GET_HOUSES + FULFILLED:
      return {...state, houses: payload, loading: false}
    case GET_HOUSES + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    default:
      return state
  }
}