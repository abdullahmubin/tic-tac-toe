import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { drawXAction, drawOAction } from '../../../actions/boardActions.js';
import { toggleTurnAction } from '../../../actions/playerActions.js';
import { checkResult } from '../../../actions/resultActions.js';

import Cross from './Cross/Cross.js'
import Zero from './Zero/Zero.js'


function Square(props) {
    const { symbol, index, draw, players, board, toggleTurn, checkResult, result } = props; // , turn

    useEffect(() => {
        // NOTE: Check Result
        checkResult(board)
      },[players]);
    
    
    const disabled = symbol ? 'disabled' : ''
    
    let resultTxt = <div className={'cell ' + disabled} onClick={() => draw(board, players, index)}> { // turn, index
        symbol ?
            (symbol === 'X' ? <Cross /> : <Zero />) : ''
    }
    </div>

    return resultTxt;

}

const mapStateToProps = ({ board, players }) => ({ board, players })
const mapDispatchToProps = dispatch => ({
    draw: (board, players, cellIndex) => {
        
        if (!board[cellIndex]) {
            dispatch(checkResult(board))
            
            if (players[players.turn] === 'X') {
                dispatch(drawXAction(cellIndex));
            }
            else {
                dispatch(drawOAction(cellIndex));

            }

            dispatch(toggleTurnAction())
        }
    },
    checkResult: (board) => dispatch(checkResult(board)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Square);