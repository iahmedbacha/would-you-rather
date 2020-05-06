import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User';

function UserContainer(props) {
  const { user } = props;
  return <User user={user} />;
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(UserContainer);
