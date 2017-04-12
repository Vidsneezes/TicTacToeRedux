import React, { PropTypes } from 'react';
import InteractionBox from '../containers/InteractionBox';

const BoardDisplay = ({grid, done}) => {
    let gridPieces;
     if(done === false)
     {
        gridPieces = grid.map((val,index) => 
            <InteractionBox key={index} indexPosition={index} />)
     }else{
         gridPieces = (
             <p>
             Game done
             </p>
         )
     }
     
     return (
        <div>
            {gridPieces}
        </div>
     )
}

BoardDisplay.propTypes = {
    grid: PropTypes.array,
    done: PropTypes.bool
}


export default BoardDisplay;