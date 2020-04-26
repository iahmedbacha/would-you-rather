import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestionContainer extends Component {
  render() {
    return <div>New Question</div>;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestionContainer);
