import * as Actions from '../constants/ActionTypes'

const initState = {
  entities: []
}

export default function drag(state = initState, action) {
  switch (action.type) {
    case Actions.DRAG_SET_DATA:
      return {...state, entities: action.entities}

    default:
      return state
  }
}
