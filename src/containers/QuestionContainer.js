import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../redux/actions/shared';
import UnAnsweredQuestion from '../components/UnAnsweredQuestion';
import AnsweredQuestion from '../components/AnsweredQuestion';

function QuestionContainer(props) {
  const answerQuestion = (e, answer) => {
    e.preventDefault();
    if (answer !== '') {
      const { dispatch, authedUser, question } = props;
      dispatch(
        handleAddQuestionAnswer({ authedUser, qid: question.id, answer })
      );
    }
  };

  const { answered, user, question, authedUser } = props;

  if (answered) {
    return (
      <AnsweredQuestion
        user={user}
        question={question}
        authedUser={authedUser}
      />
    );
  }
  return (
    <UnAnsweredQuestion
      user={user}
      question={question}
      handleAnswerQuestion={answerQuestion}
    />
  );
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  return {
    authedUser,
    answered: users[authedUser].answers[id],
    user: users[questions[id].author],
    question: questions[id],
  };
}

export default connect(mapStateToProps)(QuestionContainer);
