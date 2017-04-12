import { List, Map } from 'immutable';
import { CHANGE_GRID, END_GAME, SET_WINNER, initialState } from './actions';

let lastInput = 2;

export default function reducer(state = initialState, action){
    switch(action.type){
        case CHANGE_GRID:
            let newVal = 0;
            if(lastInput === 1){
                newVal = 2
            }else if(lastInput === 2){
                newVal = 1
            }
            return state.update('grid', list => list.set(action.indexPosition,newVal));
        case SET_WINNER:
            return state.set('winner', action.winner);
        case END_GAME:
            return state.set('done', true);
        default:
            return state;
    }
}