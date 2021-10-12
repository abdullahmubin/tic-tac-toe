import { X_WINS, O_WINS, DRAW, RESET_RESULT } from '../helpers/actionTypes';
import { checkVictory } from '../helpers/resultHelper';

export function checkResult(board, reset) {

    if (checkVictory(board, 'X')) {
        return {
            type: X_WINS
        }
    }
    else if (checkVictory(board, 'O')) {
        return {
            type: O_WINS
        }
    }
    else {

        const check = board.filter(symbol => symbol === '')
        if (check.length === 0) {
            return {
                type: DRAW
            }
        }
        else {
            return {
                type: 'no results'
            }
        }


    }
}

export function resetResult() {

    return {
        type: RESET_RESULT
    }
}