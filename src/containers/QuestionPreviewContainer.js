import React from 'react';
import { connect } from 'react-redux';
import QuestionPreview from '../components/QuestionPreview';

function QuestionPreviewContainer(props) {
  const { user, question } = props;
  return <QuestionPreview user={user} question={question} />;
}

function mapStateToProps({ users, questions }, { id }) {
  return {
    user: users[questions[id].author],
    question: questions[id],
  };
}

export default connect(mapStateToProps)(QuestionPreviewContainer);
