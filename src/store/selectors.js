import { createSelector } from 'reselect'

const stateMainSelector = state => state.curriedMainReducer;
export const getMainSelector = createSelector(stateMainSelector, state => state.main);
export const getDetailSelector = createSelector(stateMainSelector, state => state.detail);


const stateAuthSelector = state => state.curriedAuthReducer;
export const getUserSelector = createSelector(stateAuthSelector, state => state.user);
export const getLoginSelector = createSelector(stateAuthSelector, state => state.logined);
