import {
  ACTION_TYPE2
} from '../actions/types'

const initialState = {
  message: 'Initial message of state2',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE2:
      return {
        message: action.payload,
      }
    default:
      return state
  }
};
