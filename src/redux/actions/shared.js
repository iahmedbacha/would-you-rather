import getInitialData from '../../api/SharedAPI';
import { saveQuestion, saveQuestionAnswer } from '../../api/QuestionAPI';
import receiveUsers from './users';
import receiveQuestions from './questions';
import { ADD_QUESTION, ADD_QUESTION_ANSWER } from '../constants/actionTypes';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(([users, questions]) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    return saveQuestion(question).then((formattedQuestion) => {
      dispatch(addQuestion(formattedQuestion));
    });
  };
}

export function addQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleAddQuestionAnswer(info) {
  return (dispatch) => {
    return saveQuestionAnswer(info).then(() => {
      dispatch(addQuestionAnswer(info));
    });
  };
}
