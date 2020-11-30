// this module imports all the ActionTypes then exports the campsite reducer which takes the campsite section of the state and initializes wit the default function parameters syntax if it hasnt already been initialized then it takes the action that was dispatched to it and depending on what that action is it creates and returns a new state or if none of the actions matched then it just returns the previous state without doing anything to it


import * as ActionTypes from './ActionTypes';

export const campsites = (state = { isLoading: true,
                                     errMess: null,
                                     campsites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};

        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []}

        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};