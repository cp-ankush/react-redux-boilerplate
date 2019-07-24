import {GET_DATA} from '../constants'

export const getComponentDataAction = () => {
  console.log("coming to action")
  return {
    type: GET_DATA,
    payload: ''
  }
}
