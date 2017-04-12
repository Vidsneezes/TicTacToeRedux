import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import BoardDisplay from '../components/BoardDisplay';

const mapStateToProps = (state, ownProps) => {
    return {
        grid: state.get('grid').toJS(),
        done: state.get('done')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const BoardLogical = connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardDisplay)

export default BoardLogical;