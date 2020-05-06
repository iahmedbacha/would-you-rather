import React from 'react';
import { useParams } from 'react-router-dom';
import QuestionContainer from '../containers/QuestionContainer';

export default function Poll() {
  const { questionId } = useParams();
  return <QuestionContainer id={questionId} />;
}
