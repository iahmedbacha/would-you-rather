import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderboardContainer extends Component {
  render() {
    return <div>Leaderboard</div>;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(LeaderboardContainer);
