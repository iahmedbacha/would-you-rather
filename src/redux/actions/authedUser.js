import { SET_AUTHED_USER } from '../constants/actionTypes';

export default function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}
