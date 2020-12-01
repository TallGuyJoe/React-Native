// exporting a configureStore function that returns the results of calling the redux function createStore with a combineReducers argument that combines all the reducers into a single root reducer along with a call to applyMiddleWare to enable redux thunk and redux logger to work

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsites } from './campsites';
import { comments } from './comments';
import { promotions } from './promotions';
import { partners } from './partners';
import { favorites } from './favorites';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites,
            comments,
            partners,
            promotions,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );
return store;
}