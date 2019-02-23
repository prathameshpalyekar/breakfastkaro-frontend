import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Formsy from 'formsy-react';
import FC from 'components/formsy';
import './SignInForm.less';
const style = {
    fontSize: 15
};

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit: false
        };
        this.onTypeChange = this.onTypeChange.bind(this);
        this.submit = this.submit.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    onTypeChange() {
        this.props.onTypeChange('register');
    }

    submit(model) {
        console.log(model)
    }

    enableButton() {
        this.setState({
            canSubmit: true
        });
    }

    disableButton() {
        this.setState({
            canSubmit: false
        });
    }

    render() {
        const { canSubmit } = this.state;
        return (
            <div className="-sign-in-form">
                <div className="-inputs">
                    <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                        <FC.Input
                            className="-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            label="Email"
                            fullWidth={true}
                            margin="normal"
                            InputLabelProps={{style}}
                            inputProps={{style}}
                            required
                            variant="outlined"/>
                        <FC.Input
                            className="-password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            label="Password"
                            margin="normal"
                            fullWidth={true}
                            InputLabelProps={{style}}
                            inputProps={{style}}
                            required
                            variant="outlined"/>
                        <Button type="submit" disabled={!canSubmit} variant="outlined" className="-action-sign-in">Sign In</Button>
                    </Formsy>
                </div>
                <div className="-switch-form">
                    <div className="-note">Don't have an account ?</div>
                    <Button className="-action" onClick={this.onTypeChange}>Register</Button>
                </div>
            </div>
        )
    }
}

export default SignInForm;