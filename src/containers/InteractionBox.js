import React from 'react';
import { Map } from 'immutable';
import DisplayBox from './components/DisplayBox';
import { changeGrid } from '././actions';


const mapStateToProps = (state, ownProps) => {
    return {
        value: state.get('grid').get(ownProps.indexPosition)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(changeGrid(ownProps.indexPosition,1))
        }
    }
}

const InteractionBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayBox)

export default InteractionBox;