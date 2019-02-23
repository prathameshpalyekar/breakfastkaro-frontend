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
        // return axiosMainApi.request({
        //     url: 'signup',
        //     method: 'POST',
        //     data: user
        // }).then((xhrResponse) => {
        //     const response = xhrResponse.data;
        //     if (response.success) {
        //         dispatch(receiveSignUp(response.data));
        //         // onSuccess && onSuccess(response.data);
        //     } else {
        //         const message = 'Failed to fetch user information.';
        //         dispatch(signUpError(message));
        //         // onFailure && onFailure(message);
        //     }
        // }).catch((xhrResponse) => {
        //     const response = xhrResponse.data;
        //     const message = (response && response.message) || 'Failed to fetch user information. API failure.';
        //     dispatch(signUpError(message));
        //     // onFailure && onFailure(message);
        // });
        setTimeout(() => {
            console.log('here', user)
            dispatch(receiveSignUp(user));
        }, 3000);
    }
}
