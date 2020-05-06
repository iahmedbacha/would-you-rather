import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import QuestionContainer from './QuestionContainer';
import Error from '../components/Error';

function Poll(props) {
  const { questionId } = useParams();
  const { questions } = props;
  if (questions[questionId]) {
    return <QuestionContainer id={questionId} />;
  }
  return <Error />;
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default connect(mapStateToProps)(Poll);
