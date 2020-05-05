import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import setAuthedUser from '../redux/actions/authedUser';

function LoginContainer(props) {
  const login = (e, id) => {
    e.preventDefault();
    const { dispatch } = props;
    if (id !== '') {
      dispatch(setAuthedUser(id));
    }
  };

  const { users } = props;
  return <Login handleLogin={login} users={users} />;
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map((userId) => users[userId]),
  };
}

export default connect(mapStateToProps)(LoginContainer);
