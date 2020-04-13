import { saveQuestionData, saveQuestionAnswerData } from '../utils/data';

export function saveQuestion(info) {
  return saveQuestionData(info);
}

export function saveQuestionAnswer(info) {
  return saveQuestionAnswerData(info);
}
