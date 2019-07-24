import {
	GET_DATA,
  GET_DATA_SUCCESS
} from '../constants'

const initState = {
	data: ''
}

const compReducer = (state = initState, action) => {
	switch (action.type) {
		case GET_DATA_SUCCESS: {
			return {
				...state,
				data: action.data
			}
		}
		default:
			return state
	}
}
export default compReducer
