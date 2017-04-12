import { List, Map } from 'immutable';
import { CHANGE_GRID, END_GAME, initialState } from './actions';

export default function reducer(state = initialState, action){
    switch(action.type){
        case CHANGE_GRID:
            return state.update('grid', list => list.set(action.indexPosition,action.value));
        case END_GAME:
        default:
            return state;
    }
}