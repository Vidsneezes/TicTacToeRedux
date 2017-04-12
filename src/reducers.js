import { List, Map } from 'immutable';
import { CHANGE_GRID, END_GAME, SET_WINNER, initialState } from './actions';

export default function reducer(state = initialState, action){
    switch(action.type){
        case CHANGE_GRID:
            return state.update('grid', list => list.set(action.indexPosition,action.value));
        case SET_WINNER:
            return state.set('winner', action.winner);
        case END_GAME:
            return state.set('done', true);
        default:
            return state;
    }
}