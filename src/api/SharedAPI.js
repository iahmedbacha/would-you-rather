import { getUsersData, getQuestionsData } from '../utils/data';

export default function getInitialData() {
  return Promise.all([getUsersData(), getQuestionsData()]);
}
