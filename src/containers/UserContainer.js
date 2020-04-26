import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserContainer extends Component {
  render() {
    return <div>User</div>;
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(UserContainer);
