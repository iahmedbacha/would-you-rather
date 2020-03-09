import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { setAuthedUser } from './authedUser';
import {
    receiveUsers,
    addQuestion as addQuestionUsers,
    addQuestionAnswer as addQuestionAnswerUsers
} from './users';
import {
    receiveQuestions,
    addQuestion as addQuestionQuestions,
    addQuestionAnswer as addQuestionAnswerQuestions
} from './questions';

const AUTHED_USER = 'sarahedo';

export function handleInitialData() {
    return dispatch => {
        return getInitialData()
            .then(([users, questions]) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthedUser(AUTHED_USER));
            });
    };
};

export function handleAddQuestion(question) {
    return dispatch => {
        return saveQuestion(question)
            .then(formattedQuestion => {
                dispatch(addQuestionUsers(formattedQuestion));
                dispatch(addQuestionQuestions(formattedQuestion));
            });
    };
};

export function handleAddQuestionAnswer(info) {
    return dispatch => {
        return saveQuestionAnswer(info)
            .then(() => {
                dispatch(addQuestionAnswerUsers(info));
                dispatch(addQuestionAnswerQuestions(info));
            });
    };
};
