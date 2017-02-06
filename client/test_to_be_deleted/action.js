import { ACTION_TEST, ACTION_SAGA } from './constants';

export const testAction = () => ({ type: ACTION_TEST });
export const sagaAction = data => ({ type: ACTION_SAGA, payload: { text: data } });
