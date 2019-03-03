import axiosMainApi from 'components/axiosMainApi';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin() {
    return {
        type: LOGIN_REQUEST,
    };
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        user,
    };
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        message,
    };
}

export function login(user) {
    return (dispatch) => {
        dispatch(requestLogin());
        return axiosMainApi.request({
            url: 'login',
            method: 'POST',
            data: user
        }).then((xhrResponse) => {
            console.log(xhrResponse)
            const response = xhrResponse.data;
            const { data } = response;
            if (response.success) {
                dispatch(receiveLogin(response.data));
            } else {
                const message = (response && response.message) || 'Failed to login. API failure.';
                dispatch(loginError(message));
            }
        }).catch((xhrResponse) => {
            const { data } = xhrResponse.response;
            const message = (data && data.message) || 'Failed to login. API failure.';
            dispatch(loginError(message));
        });
    }
}
