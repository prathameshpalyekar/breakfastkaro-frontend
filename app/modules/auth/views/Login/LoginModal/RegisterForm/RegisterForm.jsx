import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './RegisterForm.less';
const style = {
    fontSize: 15
};

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.onTypeChange = this.onTypeChange.bind(this);
    }

    onTypeChange() {
        this.props.onTypeChange('signIn');
    }

    render() {
        return (
            <div className="-register-form">
                <div className="-inputs">
                    <TextField
                        className="-name"
                        type="text"
                        name="name"
                        label="Name"
                        fullWidth={true}
                        margin="normal"
                        InputLabelProps={{style}}
                        inputProps={{style}}
                        variant="outlined"/>
                    <TextField
                        className="-phone"
                        type="text"
                        name="contact"
                        label="Phone Number"
                        fullWidth={true}
                        margin="normal"
                        InputLabelProps={{style}}
                        inputProps={{style}}
                        variant="outlined"/>
                    <TextField
                        className="-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        label="Email"
                        fullWidth={true}
                        margin="normal"
                        InputLabelProps={{style}}
                        inputProps={{style}}
                        variant="outlined"/>
                    <TextField
                        className="-password"
                        type="password"
                        autoComplete="current-password"
                        label="Password"
                        margin="normal"
                        fullWidth={true}
                        InputLabelProps={{style}}
                        inputProps={{style}}
                        variant="outlined"/>
                    <Button className="-action-sign-in">Register</Button>
                </div>
                <div className="-switch-form">
                    <div className="-note">Already have account ?</div>
                    <Button className="-action" onClick={this.onTypeChange}>Sign In</Button>
                </div>
            </div>
        )
    }
}

export default RegisterForm;