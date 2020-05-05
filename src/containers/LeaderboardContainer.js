import React from 'react';
import { connect } from 'react-redux';

function LeaderboardContainer() {
  return <div>Leaderboard</div>;
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(LeaderboardContainer);
