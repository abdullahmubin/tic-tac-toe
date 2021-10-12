import { PLAYER_O, PLAYER_X, TURN, RESET_PLAYER} from '../helpers/actionTypes';

export function selectXPlayerAction(player) {
    return{
        type: PLAYER_X,
        player
    }
}

export function selectOPlayerAction(player) {
    return {
        type: PLAYER_O,
        player
    }
}

export function toggleTurnAction() {
    return {
        type: TURN
    }
    
}

export function resetPlayer() {
    return {
        type: RESET_PLAYER
    }
}