import Immutable from 'immutable';
import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../actions/signUp.js';

function getUser() {
    const { _user } = window;

    if (!_user || typeof _user !== 'object' || !_user.email) {
        return false;
    }

    const user = Object.assign({}, _user);
    return user;
}


const auth = (state = Immutable.fromJS({
    isFetching: false,
    user: getUser(),
}), action) => {
    switch (action.type) {
        // case LOGIN_REQUEST:
        //     return state.merge({
        //         isFetching: true,
        //         isAuthenticated: false,
        //         errorMessage: '',
        //         user: action.creds
        //     });
        // case LOGIN_SUCCESS:
        //     return state.merge({
        //         isFetching: false,
        //         isAuthenticated: true,
        //         errorMessage: '',
        //         user: action.user
        //     });
        // case LOGIN_FAILURE:
        //     return state.merge({
        //         isFetching: false,
        //         isAuthenticated: false,
        //         errorMessage: action.message,
        //         user: null
        //     });
        // case LOGOUT_REQUEST:
        //     return state.merge({
        //         isFetching: true
        //     });
        // case LOGOUT_SUCCESS:
        //     return state.merge({
        //         isFetching: false,
        //         isAuthenticated: false,
        //         user: null,
        //         errorMessage: ''
        //     });

        case SIGNUP_REQUEST:
            return state.merge({
                isFetching: true,
                errorMessage: null,
                user: null
            });
        case SIGNUP_SUCCESS:
            return state.merge({
                isFetching: false,
                errorMessage: null,
                user: action.user
            });
        case SIGNUP_FAILURE:
            return state.merge({
                isFetching: false,
                errorMessage: action.message,
                user: null
            });

        default:
            return state
    }
}

export default auth;
