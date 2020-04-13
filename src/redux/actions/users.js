import { RECEIVE_USERS } from '../constants/actionTypes';

export default function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
