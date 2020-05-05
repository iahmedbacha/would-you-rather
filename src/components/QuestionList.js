import React from 'react';
import QuestionPreviewContainer from '../containers/QuestionPreviewContainer';

export default function QuestionList(props) {
  const { questionsIds } = props;
  return questionsIds.map((questionId) => (
    <QuestionPreviewContainer key={questionId} id={questionId} />
  ));
}
