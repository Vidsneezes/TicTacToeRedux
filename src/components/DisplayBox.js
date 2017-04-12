import React, { PropTypes } from 'react';

const DisplayBox = ({value, onClick}) => (
    <p onClick={onClick}>
    {value}
    </p>
)

DisplayBox.propTypes = {
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default DisplayBox;