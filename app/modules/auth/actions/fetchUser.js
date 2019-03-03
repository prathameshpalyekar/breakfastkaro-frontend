import axiosMainApi from 'components/axiosMainApi';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

function requestFetchUser() {
    return {
        type: FETCH_USER_REQUEST,
    };
}

function receiveFetchUser(user) {
    return {
        type: FETCH_USER_SUCCESS,
        user,
    };
}

function fetchUserError(message) {
    return {
        type: FETCH_USER_FAILURE,
        message,
    };
}

export function fetchUser(token) {
    return (dispatch) => {
        dispatch(requestFetchUser());
        return axiosMainApi.request({
            url: 'me',
            method: 'POST',
            data: token
        }).then((xhrResponse) => {
            const response = xhrResponse.data;
            const { data } = response;
            if (response.success) {
                dispatch(receiveFetchUser(response.data));
            } else {
                const message = (response && response.message) || 'Failed to fetch User. API failure.';
                dispatch(fetchUserError(message));
            }
        }).catch((xhrResponse) => {
            const { data } = xhrResponse.response;
            const message = (data && data.message) || 'Failed to fetch User. API failure.';
            dispatch(fetchUserError(message));
        });
    }
}
