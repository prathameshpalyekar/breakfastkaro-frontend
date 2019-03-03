import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Formsy from 'formsy-react';
import FC from 'components/formsy';
import { login } from 'modules/auth/actions/login';
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

    componentWillReceiveProps(nextProps) {
        const { isFetching, errorMessage } = nextProps;
        if (this.state.submitted && !isFetching) {
            if (errorMessage) {
                this.props.showResponse(errorMessage);
            } else {
                const { user } = nextProps;
                const { signedToken } = user;
                localStorage.setItem('breakfastkaro_token', signedToken)
                this.props.showResponse('Logged in successfully.');
                this.props.closeForm();
            }

            this.setState({
                submitted: false
            });
        }
    }

    onTypeChange() {
        this.props.onTypeChange('register');
    }

    submit(model) {
        const { dispatch } = this.props;
        dispatch(login(model));
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
            <div className="-sign-in-form">
                <div className="-inputs">
                    <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                        <FC.Input type="email" name="email" label="Email" required/>
                        <FC.Input type="password" name="password" label="Password" required/>
                        <Button type="submit" disabled={!canSubmit} variant="outlined" className="-action-sign-in">
                            Sign In
                            {submitted && <CircularProgress size={24} className="-loader"/>}
                        </Button>
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

export default connect(mapStateToProps, mapDispatchtoProps)(SignInForm);
