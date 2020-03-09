import { _getUsers,
    _getQuestions,
} from '../utils/data';

export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()]);
};
