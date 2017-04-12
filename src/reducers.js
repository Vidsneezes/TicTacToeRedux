import { List, Map } from 'immutable';
import { CHANGE_GRID, END_GAME } from './actions';

export default function reducer(state = Map(), action){
    switch(action.type){
        case CHANGE_GRID:
            let grid = state.get('grid');
            grid.set(action.indexPosition, value);
            return state.set('grid',grid);
        case END_GAME:
            return state.set('done',true);
    }
}