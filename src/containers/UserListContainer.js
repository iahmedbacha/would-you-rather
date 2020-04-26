import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserListContainer extends Component {
  render() {
    return <div>User List</div>;
  }
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(UserListContainer);
