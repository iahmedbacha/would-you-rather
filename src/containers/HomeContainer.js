import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import QuestionList from '../components/QuestionList';

function HomeContainer(props) {
  const { unAnsweredQuestionsIds, answeredQuestionsIds } = props;
  const unAnsweredQuestions = (
    <QuestionList questionsIds={unAnsweredQuestionsIds} />
  );
  const answeredQuestions = (
    <QuestionList questionsIds={answeredQuestionsIds} />
  );
  return (
    <div>
      <Home
        unAnsweredQuestions={unAnsweredQuestions}
        answeredQuestions={answeredQuestions}
      />
    </div>
  );
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

export default connect(mapStateToProps)(HomeContainer);
