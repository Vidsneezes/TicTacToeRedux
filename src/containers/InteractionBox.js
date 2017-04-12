import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import DisplayBox from '../components/DisplayBox';
import { changeGrid, checkGameOver } from '../actions';


const mapStateToProps = (state, ownProps) => {
    return {
        value: state.get('grid').get(ownProps.indexPosition)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(changeGrid(ownProps.indexPosition,1))
            dispatch(checkGameOver());
        }
    }
}

const InteractionBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayBox)

export default InteractionBox;