import React from 'react';
import { connect } from 'react-redux';

function UserListContainer() {
  return <div>User List</div>;
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(UserListContainer);
