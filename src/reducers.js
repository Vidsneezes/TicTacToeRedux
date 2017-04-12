import { List, Map } from 'immutable';
import { CHANGE_GRID, CHECK_GAMEOVER, initialState } from './actions';

let lastInput = 2;
let moveCount = 0;
let lastIndex = 0;

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
                lastIndex = action.indexPosition;
                lastInput = newVal;
                return state.update('grid', list => list.set(action.indexPosition,newVal));
            }
        return state;
        case CHECK_GAMEOVER:
            let grid = state.get('grid').toJS();
            let done = false;
            const size = 3;
            if(moveCount === 9){
                console.log("game over draw");
                done = true;
            }

            const y = Math.floor(lastIndex/size);
            const x = lastIndex - (y*size);

            if(done === false){
                for(var i = 0; i < size; i++){
                    if(grid[x + i*size] != lastInput){
                        break;
                    }
                    if(i === size-1){
                        done = true;
                    }
                }
            }
            if(done === false){
                for(var i = 0; i < size; i++){
                    if(grid[i + y*size] != lastInput){
                        break;
                    }
                    if(i === size-1){
                        done = true;
                    }
                }
            }

            if(done === false){
                if(x === y){
                    for(var i = 0; i < size; i++){
                        if(grid[i + i*size] != lastInput){
                            break;
                        }
                        if(i === size-1){
                            done = true;
                        }
                    }
                }
            }

             if(done === false){
                if(x + y === size - 1){
                    for(var i = 0; i < size; i++){
                        if(grid[i + ((size - 1)-i)*size] != lastInput){
                            break;
                        }
                        if(i === size-1){
                            done = true;
                        }
                    }
                }
            }

            const stateDone = state.set('done',done);
            if(done === true){
                console.log("game over winner is " + lastInput);
                return stateDone.set('winner', lastInput);
            }
            return stateDone;
        default:
            return state;
    }
}