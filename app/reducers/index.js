import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router';

import auth from 'modules/auth/reducers';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth,
})

export default rootReducer;