import {
    _saveQuestion,
    _saveQuestionAnswer,
} from '../utils/data';

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info);
};

export function saveQuestion(info) {
    return _saveQuestion(info);
};
