import { DRAW_X, DRAW_Y, RESET_BOARD } from "../helpers/actionTypes";

const initialState = [
    '', '', '',
    '', '', '',
    '', '', ''
]

function initialData() {
    let whiteBoardData = localStorage.getItem('whiteBoardData')
    let whiteBoardDataList = whiteBoardData && whiteBoardData.split(',');

    if (whiteBoardDataList && whiteBoardDataList.length) {
        return whiteBoardDataList;
    }
    else
        return initialState
}

export function boardReducer(state = initialData(), action) {
    switch (action.type) {
        case DRAW_X:
            const newXState = [...state]
            newXState[action.cellIndex] = 'X';
            return newXState

        case DRAW_Y:
            const newOState = [...state]
            newOState[action.cellIndex] = 'O';
            return newOState
        case RESET_BOARD:
            return initialState
        default:
            return state;
    }
}