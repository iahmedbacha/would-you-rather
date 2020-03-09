import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import QuestionList from "./QuestionList";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div className="App">
        {loggedIn
          ? <QuestionList />
          : null
        }
      </div>
    );
  };
};

function mapStateToProps({authedUser}) {
  return {
    loggedIn: authedUser !== null
  };
};

export default connect(mapStateToProps)(App);
