import React, { Component } from 'react';
import { connect } from 'react-redux';
import setAuthedUser from '../redux/actions/authedUser';
import AppBar from '../components/AppBar';
import QuestionListContainer from './QuestionListContainer';

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  };

  render() {
    return (
      <div>
        <AppBar handleLogout={this.handleLogout} />
        <QuestionListContainer />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Home);
