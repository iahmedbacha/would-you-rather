import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionList extends Component {
  render() {
    return <div>Question List</div>;
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    unAnsweredQuestionsIds: Object.keys(questions).filter(
      (qid) =>
        !questions[qid].optionOne.votes.includes(authedUser) &&
        !questions[qid].optionTwo.votes.includes(authedUser)
    ),
    answeredQuestionsIds: Object.keys(questions).filter(
      (qid) =>
        questions[qid].optionOne.votes.includes(authedUser) ||
        questions[qid].optionTwo.votes.includes(authedUser)
    ),
  };
}

export default connect(mapStateToProps)(QuestionList);
