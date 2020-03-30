import {LOAD_MAIN_SUCCESS, LOAD_MORE_SUCCESS, LOAD_DETAIL_SUCCESS} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_MAIN_SUCCESS:
            console.log('LOAD_MAIN_SUCCESS')
            state.main = payload;
            return;
        case LOAD_MORE_SUCCESS:
            console.log('LOAD_MORE_SUCCESS')
            state.main = [...state.main, ...payload];
            return;
        case LOAD_DETAIL_SUCCESS:
            console.log('LOAD_DETAIL_SUCCESS')
            state.detail = payload;
            return;
        default: return state
    }
}