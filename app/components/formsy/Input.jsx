import { withFormsy } from 'formsy-react';
import React from 'react';
import TextField from '@material-ui/core/TextField';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        const value = event.target.value;
        this.props.setValue(value);
        this.props.onChange && this.props.onChange(this.props.name, value);
    }

    render() {
        const {
            validationError,
            validationErrors,
            showError,
            showRequired,
            setValue,
            setValidations,
            resetValue,
            isValidValue,
            isRequired,
            isFormSubmitted,
            isPristine,
            isValid,
            isFormDisabled,
            hasValue,
            getValue,
            getErrorMessages,
            getErrorMessage,
             ...rest
        } = this.props;
        const errorMessage = getErrorMessage();

        return (
            <div>
                <TextField {...rest} onChange={this.changeValue} value={getValue() || ''}/>
                <span>{errorMessage}</span>
            </div>
        );
    }
}

export default withFormsy(Input);