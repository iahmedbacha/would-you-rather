import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../redux/actions/shared';
import NewQuestion from '../components/NewQuestion';

function NewQuestionContainer(props) {
  const newQuestion = (e, optionOneText, optionTwoText) => {
    e.preventDefault();
    const { dispatch, authedUser, history } = props;
    if (optionOneText !== '' && optionTwoText !== '') {
      dispatch(
        handleAddQuestion({ optionOneText, optionTwoText, author: authedUser })
      );
      history.push('/home');
    }
  };

  return <NewQuestion handleNewQuestion={newQuestion} />;
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(NewQuestionContainer));
