import React from 'react';
import { connect } from 'react-redux';

function UserContainer() {
  return <div>User</div>;
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(UserContainer);
