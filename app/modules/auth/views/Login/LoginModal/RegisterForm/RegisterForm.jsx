import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Formsy from 'formsy-react';
import FC from 'components/formsy';
import { signUp } from 'modules/auth/actions/signUp';
import './RegisterForm.less';
const style = {
    fontSize: 15
};

class RegisterForm extends Component {
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

    componentWillReceiveProps(nextProps) {
        const { isFetching, errorMessage } = nextProps;
        if (this.state.submitted && !isFetching) {
            if (errorMessage) {
                this.props.showResponse(errorMessage);
            } else {
                this.props.showResponse('Account created successfully. Please verify your account.');
                this.props.closeForm();
            }

            this.setState({
                submitted: false
            });
        }
    }

    onTypeChange() {
        this.props.onTypeChange('signIn');
    }

    submit(model) {
        const { dispatch } = this.props;
        dispatch(signUp(model));
        this.setState({
            submitted: true
        });
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
        const { canSubmit, submitted } = this.state;
        return (
            <div className="-register-form">
                <div className="-inputs">
                    <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                        <FC.Input type="text" name="name" label="Name" required/>
                        <FC.Input type="text" name="personalNumber" label="Phone Number" required/>
                        <FC.Input type="email" name="email" label="Email" required/>
                        <FC.Input type="password" name="password" label="Password" required/>
                        <Button type="submit" disabled={!canSubmit || submitted} variant="outlined" className="-action-sign-in">
                            Register
                            {submitted && <CircularProgress size={24} className="-loader"/>}
                        </Button>
                    </Formsy>
                </div>
                <div className="-switch-form">
                    <div className="-note">Already have account ?</div>
                    <Button className="-action" onClick={this.onTypeChange}>Sign In</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.getIn(['auth', 'isFetching']),
        errorMessage: state.getIn(['auth', 'errorMessage']),
        user: state.getIn(['auth', 'user']),
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchtoProps)(RegisterForm);
