import React, { PropTypes } from 'react';

const DisplayBox = ({value}) => (
    <p>
    {value}
    </p>
)

DisplayBox.propTypes = {
    value: PropTypes.string.isRequired
}

export default DisplayBox;