import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionPreview extends Component {
  render() {
    return <div>Question Preview</div>;
  }
}

function mapStateToProps({ users, questions }, { id }) {
  return {
    user: users[questions[id].author].name,
    question: questions[id],
  };
}

export default connect(mapStateToProps)(QuestionPreview);
