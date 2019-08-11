import {
  ACTION_TYPE1
} from '../actions/types'

const initialState = {
  message: 'Initial message of state1',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE1:
      return {
        message: action.payload,
      }
    default:
      return state
  }
};
