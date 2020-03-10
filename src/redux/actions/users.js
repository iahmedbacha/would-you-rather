import { RECEIVE_USERS } from '../constants/actionTypes';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    };
};
