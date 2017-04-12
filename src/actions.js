import { List, Map } from 'immutable';

export const CHANGE_GRID = "CHANGE_GRID";
export const CHECK_GAMEOVER = "CHECK_GAMEOVER";

export const initialState = Map({done:false,winner:0, grid:List([0,0,0,0,0,0,0,0,0])});

export function changeGrid(indexPosition){
    return {
        type: CHANGE_GRID,
        indexPosition
    }
}

export function checkGameOver(){
    return {
        type: CHECK_GAMEOVER
    }
}

export function endGame(){
    return {
        type: END_GAME
    }
}

export function setWinner(winner){
    return {
        type: SET_WINNER,
        winner
    }
}