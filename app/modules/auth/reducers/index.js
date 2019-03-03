import Immutable from 'immutable';
import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../actions/signUp.js';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login.js';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/fetchUser.js';

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
        case LOGIN_REQUEST:
            return state.merge({
                isFetching: true,
                errorMessage: '',
            });
        case LOGIN_SUCCESS:
            return state.merge({
                isFetching: false,
                errorMessage: '',
                user: action.user
            });
        case LOGIN_FAILURE:
            return state.merge({
                isFetching: false,
                errorMessage: action.message,
                user: null
            });

        case FETCH_USER_REQUEST:
            return state.merge({
                isFetchingUser: true,
                errorMessage: '',
            });
        case FETCH_USER_SUCCESS:
            return state.merge({
                isFetchingUser: false,
                errorMessage: '',
                user: action.user
            });
        case FETCH_USER_FAILURE:
            return state.merge({
                isFetchingUser: false,
                errorMessage: action.message,
                user: null
            });

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
            });
        case SIGNUP_SUCCESS:
            return state.merge({
                isFetching: false,
                errorMessage: null,
            });
        case SIGNUP_FAILURE:
            return state.merge({
                isFetching: false,
                errorMessage: action.message,
            });

        default:
            return state
    }
}

export default auth;
