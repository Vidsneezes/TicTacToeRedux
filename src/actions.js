import { List, Map } from 'immutable';

export const CHANGE_GRID = "CHANGE_GRID";

const initialState = Map({done:false,grid:List([000000000])});

export function changeGrid(indexPosition, value){
    return {
        type: CHANGE_GRID,
        indexPosition,
        value
    }
}