import React, { PropTypes } from 'react';
import InteractionBox from '../containers/InteractionBox';

const BoardDisplay = ({grid}) => (
    <div>
        {grid.map((val,index) => 
            <InteractionBox key={index} indexPosition={index} />
        )}
    </div>
)

BoardDisplay.propTypes = {
    grid: PropTypes.array
}


export default BoardDisplay;