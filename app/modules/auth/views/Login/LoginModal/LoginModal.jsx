import React, { Component } from 'react';
import Modal from 'components/modal';
import SignInForm from './SignInForm/SignInForm';
import RegisterForm from './RegisterForm/RegisterForm';
import './LoginModal.less';

const FORM_TYPES = {
    SIGN_IN: {
        type: 'signIn',
        title: 'Sign In',
    },
    REGISTER: {
        type: 'register',
        title: 'Register',
    },
};

class LoginModal extends Component {
    constructor(props) {
        super(props);
        const { title, type } = FORM_TYPES.SIGN_IN;
        this.state = {
            title,
            type,
        };
        this.onTypeChange = this.onTypeChange.bind(this);
        // this.closeForm = this.closeForm.bind(this);
    }

    onTypeChange(type) {
        const key = type === 'signIn' ? 'SIGN_IN' : 'REGISTER';
        this.setState({
            type,
            title: FORM_TYPES[key].title
        });
    }

    render() {
        const { title, type } = this.state;
        return (
            <Modal open={true} closeForm={this.props.closeForm} title={title}>
                <div>
                    {type === FORM_TYPES.SIGN_IN.type ?
                        <SignInForm onTypeChange={this.onTypeChange}/> :
                        <RegisterForm onTypeChange={this.onTypeChange}/>
                    }
                </div>
            </Modal>
        )
    }
}

export default LoginModal;
