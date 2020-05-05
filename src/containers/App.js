import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../redux/actions/shared';
import LoginContainer from './LoginContainer';
import Home from './Home';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App">{isLoggedIn ? <Home /> : <LoginContainer />}</div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isLoggedIn: authedUser !== null,
  };
}

export default connect(mapStateToProps)(App);
