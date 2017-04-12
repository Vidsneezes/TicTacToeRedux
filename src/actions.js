import { List, Map } from 'immutable';

export const CHANGE_GRID = "CHANGE_GRID";

export const END_GAME = "END_GAME";

export const initialState = Map({done:false,grid:List([0,0,0,0,0,0,0,0,0])});

export function changeGrid(indexPosition, value){
    return {
        type: CHANGE_GRID,
        indexPosition,
        value
    }
}

export function endGame(winner){
    return {
        type: END_GAME,
        winner
    }
}