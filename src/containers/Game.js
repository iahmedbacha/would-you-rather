import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import setAuthedUser from '../redux/actions/authedUser';
import AppBar from '../components/AppBar';
import HomeContainer from './HomeContainer';
import NewQuestionContainer from './NewQuestionContainer';
import LeaderboardContainer from './LeaderboardContainer';

class Game extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  };

  render() {
    return (
      <div>
        <AppBar handleLogout={this.handleLogout} />
        <Switch>
          <Route path="/newQuestion">
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
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Game);
