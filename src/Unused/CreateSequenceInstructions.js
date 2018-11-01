import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const CreateSequenceInstructions = (props) => (
    <Fragment>
        <h1>CREATE A PLACECAST</h1>
        <h2>Step {props.stepNumber} of 4</h2>
    </Fragment>
)

CreateSequenceInstructions.propTypes = {
    stepNumber: PropTypes.string,
}

export {CreateSequenceInstructions}