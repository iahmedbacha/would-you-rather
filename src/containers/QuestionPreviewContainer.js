import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from '../components/QuestionPreview';

class QuestionPreviewContainer extends Component {
  render() {
    const { user, question } = this.props;
    return <QuestionPreview user={user} question={question} />;
  }
}

function mapStateToProps({ users, questions }, { id }) {
  return {
    user: users[questions[id].author],
    question: questions[id],
  };
}

export default connect(mapStateToProps)(QuestionPreviewContainer);
