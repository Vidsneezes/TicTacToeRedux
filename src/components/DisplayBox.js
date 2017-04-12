import React, { PropTypes } from 'react';

const DisplayBox = ({value}) => (
    <li>
    {value}
    </li>
)

DisplayBox.propTypes = {
    value: PropTypes.string.isRequired
}

export default DisplayBox;