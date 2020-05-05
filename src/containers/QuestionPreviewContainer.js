import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from '../components/QuestionPreview';

class QuestionPreviewContainer extends Component {
  render() {
    return <QuestionPreview />;
  }
}

function mapStateToProps({ users, questions }, { id }) {
  return {
    user: users[questions[id].author].name,
    question: questions[id],
  };
}

export default connect(mapStateToProps)(QuestionPreviewContainer);
