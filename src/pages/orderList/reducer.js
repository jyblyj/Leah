import {
    CHANGE_ORDER_STATE
} from 'constant/actionType';

const INITIAL_STATE = {

}

export default function order(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_ORDER_STATE:
            return Object.assign({}, state, { ...action.data });
        default:
            return state
    }
}
