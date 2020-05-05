import React from 'react';
import { connect } from 'react-redux';

function QuestionContainer() {
  return <div>Question</div>;
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  return {
    authedUser,
    user: users[questions[id].author].name,
    question: questions[id],
    answered:
      questions[id].optionOne.votes.includes(authedUser) ||
      questions[id].optionTwo.votes.includes(authedUser),
  };
}

export default connect(mapStateToProps)(QuestionContainer);
