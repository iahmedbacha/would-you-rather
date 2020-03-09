import { _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA';

export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()]);
};

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info);
};

export function saveQuestion(info) {
    return _saveQuestion(info);
};
