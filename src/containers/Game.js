import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import setAuthedUser from '../redux/actions/authedUser';
import AppBar from '../components/AppBar';
import HomeContainer from './HomeContainer';
import NewQuestionContainer from './NewQuestionContainer';
import UserListContainer from './UserListContainer';
import Poll from './PollContainer';

function Game(props) {
  const handleLogout = () => {
    const { dispatch, history } = props;
    dispatch(setAuthedUser(null));
    history.push('/');
  };

  const { user } = props;

  return (
    <div>
      <AppBar handleLogout={handleLogout} user={user} />
      <Switch>
        <Route path="/add">
          <NewQuestionContainer />
        </Route>
        <Route path="/leaderboard">
          <UserListContainer />
        </Route>
        <Route path="/questions/:questionId">
          <Poll />
        </Route>
        <Route path="/">
          <HomeContainer />
        </Route>
      </Switch>
    </div>
  );
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser],
  };
}

export default withRouter(connect(mapStateToProps)(Game));
