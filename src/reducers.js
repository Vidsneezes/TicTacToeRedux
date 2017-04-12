import { List, Map } from 'immutable';
import { CHANGE_GRID, END_GAME } from './actions';

export function gameloop(state = Map(), action){
    switch(action.type){
        case CHANGE_GRID:
            let grid = state.get('grid');
            grid.set(action.indexPosition, value);
            return state.set('grid',grid);
    }
}