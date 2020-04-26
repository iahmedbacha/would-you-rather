import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import setAuthedUser from '../redux/actions/authedUser';

class LoginContainer extends Component {
  login = (e, id) => {
    e.preventDefault();
    const { dispatch } = this.props;
    if (id !== '') {
      dispatch(setAuthedUser(id));
    }
  };

  render() {
    const { users } = this.props;
    return <Login handleLogin={this.login} users={users} />;
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map((userId) => users[userId]),
  };
}

export default connect(mapStateToProps)(LoginContainer);
