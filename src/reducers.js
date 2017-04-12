import { List, Map } from 'immutable';
import { CHANGE_GRID, CHECK_GAMEOVER, initialState } from './actions';

let lastInput = 2;
let moveCount = 0;

export default function reducer(state = initialState, action){
    switch(action.type){
        case CHANGE_GRID:
            if(state.get('grid').get(action.indexPosition) === 0)
            {
                moveCount += 1;
                let newVal = 0;
                if(lastInput === 1){
                    newVal = 2
                }else if(lastInput === 2){
                    newVal = 1
                }
                    lastInput = newVal;
                return state.update('grid', list => list.set(action.indexPosition,newVal));
            }
        return state;
        case CHECK_GAMEOVER:
            let grid = state.get('grid').toJS();
            let done = false;
            let valueWinnder = 0;
            const stateDone = state.set('done',done);
            


            if(done === true){
                return stateDone.set('winner', valueWinnder);
            }
            return stateDone;
        default:
            return state;
    }
}