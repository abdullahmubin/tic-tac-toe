import { DRAW_X, DRAW_Y, RESET_BOARD } from '../helpers/actionTypes';

export function drawXAction(cellIndex) {
    return {
        type: DRAW_X,
        cellIndex
    }

}

export function drawOAction(cellIndex) {
    return {
        type: DRAW_Y,
        cellIndex
    }


}

export function resetEverything() {
    return {
        type: RESET_BOARD
    }
}