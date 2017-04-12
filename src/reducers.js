import { List, Map } from 'immutable';
import { CHANGE_GRID, END_GAME, initialState } from './actions';

export default function reducer(state = initialState, action){
    switch(action.type){
        case CHANGE_GRID:
            let grid = state.get('grid');
            grid.set(action.indexPosition, action.value);
            return state.set('grid',grid);
        case END_GAME:
            return state.set('done',true);
        default:
            return state;
    }
}