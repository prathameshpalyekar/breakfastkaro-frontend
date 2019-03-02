import axiosMainApi from 'components/axiosMainApi';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

function requestSignUp() {
    return {
        type: SIGNUP_REQUEST,
    };
}

function receiveSignUp(user) {
    return {
        type: SIGNUP_SUCCESS,
        user,
    };
}

function signUpError(message) {
    return {
        type: SIGNUP_FAILURE,
        message,
    };
}

export function signUp(user) {
    return (dispatch) => {
        dispatch(requestSignUp());
        return axiosMainApi.request({
            url: 'signup',
            method: 'POST',
            data: user
        }).then((xhrResponse) => {
            const response = xhrResponse.data;
            const { data } = response;
            if (response.success) {
                dispatch(receiveSignUp(response.data));
            } else {
                const message = (response && response.message) || 'Failed to create user. API failure.';
                dispatch(signUpError(message));
            }
        }).catch((xhrResponse) => {
            const { data } = xhrResponse.response;
            const message = (data && data.message) || 'Failed to create user. API failure.';
            dispatch(signUpError(message));
        });
    }
}
