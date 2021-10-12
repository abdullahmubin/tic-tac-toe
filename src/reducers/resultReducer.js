import { X_WINS, O_WINS, DRAW, RESET_RESULT } from '../helpers/actionTypes';

const initialState = {
    win: null,
    draw: false
}

function processInitialState() {
    
    let resultStorage = localStorage.getItem('resultInfo')
    if (resultStorage) {
        return JSON.parse(resultStorage);
    }
    else
        return initialState
}

export function resultReducer(state = processInitialState(), action) {
 
    switch (action.type) {
        case X_WINS:
            return {
                win: 'X',
                draw: false
            }

        case O_WINS:
            return {
                win: 'O',
                draw: false
            }

        case DRAW: 
        return{
            win: null,
            draw: true
        }
        case RESET_RESULT:
            return {
                initialState
            }
        default:
            return state
    }
}