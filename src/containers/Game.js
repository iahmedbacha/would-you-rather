import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import setAuthedUser from '../redux/actions/authedUser';
import AppBar from '../components/AppBar';
import HomeContainer from './HomeContainer';
import NewQuestionContainer from './NewQuestionContainer';
import LeaderboardContainer from './LeaderboardContainer';

function Game(props) {
  const handleLogout = () => {
    const { dispatch } = props;
    dispatch(setAuthedUser(null));
  };

  return (
    <div>
      <AppBar handleLogout={handleLogout} />
      <Switch>
        <Route path="/add">
          <NewQuestionContainer />
        </Route>
        <Route path="/leaderboard">
          <LeaderboardContainer />
        </Route>
        <Route path="/">
          <HomeContainer />
        </Route>
      </Switch>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Game);
