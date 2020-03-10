import { RECEIVE_QUESTIONS } from '../constants/actionTypes';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
};
