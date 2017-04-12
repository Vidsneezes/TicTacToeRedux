import React, { PropTypes } from 'react';
import InteractionBox from '../containers/InteractionBox';

const App = ({grid}) => (
    <div>
        {grid.map(({val,index}) => 
            <InteractionBox indexPosition={index} />
        )}
    </div>
)

App.propTypes = {
    grid: PropTypes.array
}


export default App;