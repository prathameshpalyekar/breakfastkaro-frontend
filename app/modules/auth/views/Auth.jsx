import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Login from './Login/Login';
import { fetchUser } from 'modules/auth/actions/fetchUser';
import './Auth.less';

const SNACKBAR_ANCHOR = {
    vertical: 'bottom',
    horizontal: 'center',
};

const SNACKBAR_CONTENT_PROPS = {
    'aria-describedby': 'message-id' 
};

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResponse: false
        };
        this.hideResponse = this.hideResponse.bind(this);
        this.showResponse = this.showResponse.bind(this);
        this.renderResponse = this.renderResponse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { isFetching, errorMessage } = nextProps;
        if (this.state.submitted && !isFetching) {
            if (errorMessage) {
                console.log(errorMessage);
                localStorage.removeItem('breakfastkaro_token');
            }

            this.setState({
                submitted: false
            });
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const token = localStorage.getItem('breakfastkaro_token');
        if (!token) {
            return null;
        }

        dispatch(fetchUser({ token }));
        this.setState({
            submitted: true
        });
    }

    hideResponse() {
        this.setState({
            showResponse: false
        });
    }

    showResponse(response) {
        this.setState({
            showResponse: true,
            response
        });
    }

    renderLogin() {
        return (
            <Login showResponse={this.showResponse}/>
        );
    }

    renderResponse() {
        const { response } = this.state;
        return (
            <span id="message-id" className="-message">{response}</span>
        );
    }

    render() {
        const { pathname } = this.props.location || {};
        const { showResponse, response } = this.state;
        const { user } = this.props;

        return (
            <div className="auth-container">
                {this.renderLogin()}
                <Snackbar
                    className="-snackbar"
                    anchorOrigin={SNACKBAR_ANCHOR}
                    open={showResponse}
                    onClose={this.hideResponse}
                    ContentProps={SNACKBAR_CONTENT_PROPS}
                    autoHideDuration={6000}
                >
                    <SnackbarContent className="-message-container" message={this.renderResponse()}/>
                </Snackbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.getIn(['auth', 'isFetchingUser']),
        errorMessage: state.getIn(['auth', 'errorMessage']),
        user: state.getIn(['auth', 'user']),
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Auth);
