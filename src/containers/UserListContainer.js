import React from 'react';
import { connect } from 'react-redux';
import UserList from '../components/UserList';

function UserListContainer(props) {
  const { usersIds } = props;
  return <UserList usersIds={usersIds} />;
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users).sort(
      (a, b) =>
        users[b].questions.length +
        Object.keys(users[b].answers).length -
        users[a].questions.length -
        Object.keys(users[a].answers).length
    ),
  };
}

export default connect(mapStateToProps)(UserListContainer);
