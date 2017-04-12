import { List, Map } from 'immutable';

export const CHANGE_GRID = "CHANGE_GRID";
export const SET_WINNER = "SET_WINNER"
export const END_GAME = "END_GAME";

export const initialState = Map({done:false,winner:0, grid:List([0,0,0,0,0,0,0,0,0])});

export function changeGrid(indexPosition){
    return {
        type: CHANGE_GRID,
        indexPosition
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