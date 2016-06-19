import * as types from '../constants/ActionTypes';

export function setData(entities) {
	return {
		type: types.DRAG_SET_DATA,
		entities: entities
	}
}
