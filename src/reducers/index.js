import { combineReducers } from 'redux';
import { boardReducer } from './BoardReducer';
import { playerReducer } from './playerReducer';
import { resultReducer } from './resultReducer';

export default combineReducers({
    board: boardReducer,
    players: playerReducer,
    result: resultReducer
})