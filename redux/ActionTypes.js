// this file has all the possible action objects that we can dispatch to reducers to let the application know the current state including when we are loading data when were adding data and when our fetching for data has failed for some reason

export const CAMPSITES_LOADING = 'CAMPSITES_LOADING';
export const ADD_CAMPSITES = 'ADD_CAMPSITES';
export const CAMPSITES_FAILED = 'CAMPSITES_FAILED';

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';

export const PROMOTIONS_LOADING = 'PROMOTIONS_LOADING';
export const ADD_PROMOTIONS = 'ADD_PROMOTIONS';
export const PROMOTIONS_FAILED = 'PROMOTIONS_FAILED';

export const PARTNERS_LOADING = 'PARTNERS_LOADING';
export const ADD_PARTNERS = 'ADD_PARTNERS';
export const PARTNERS_FAILED = 'PARTNERS_FAILED';

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE-FAVORITE';
