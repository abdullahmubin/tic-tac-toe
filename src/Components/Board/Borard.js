import React, { Fragment, useEffect } from 'react'

import './Board.css'
import Square from './Square/Square';
import { connect } from 'react-redux';

import { resetEverything } from '../../actions/boardActions';
import { resetPlayer } from '../../actions/playerActions';
import { resetResult } from '../../actions/resultActions';

function Board(props) {

    const { board, players, result, resetEverything } = props;

    useEffect(() => {

        // NOTE: it used to modify localstorage data to handle browser refresh.

        localStorage.setItem('whiteBoardData', board);
        localStorage.setItem('playerListInfo', JSON.stringify(players))
        localStorage.setItem('resultInfo', JSON.stringify(result))

    }, [board, players, result]);

    let player = players.p1 === result.win ? 'Player 1' : 'Player 2';

    let resultList = result.draw ? <div className="alert alert-info mt-2">It's a draw</div> :
        result.win == 'X' ? <div className="alert alert-success mt-2">{player} Wins!</div>
            : result.win == 'O' ? <div className="alert alert-success mt-2">{player} Wins!</div> : '';

    let pointerEventValue = result.draw || result.win;

    return (
        <Fragment>
            <div className="d-flex justify-content-center mt-5 mb-1">
                <h3>Tick-tack-toe game</h3>
            </div>
            <div className="d-flex justify-content-center">
                <div style={{cursor: pointerEventValue ? 'not-allowed' : 'auto' }}>
                <div id="Board" className="mt-4 d-flex flex-wrap" style={{ pointerEvents: pointerEventValue ? 'none' : 'auto' }}>
                    {
                        board.map((symbol, i) => <Square key={i} index={i} result={result} symbol={symbol} />)
                    }
                </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                {
                    !pointerEventValue && <div className="mt-4">
                        <div className="">
                            <p><strong>Player 1</strong>: <b style={{ color: 'green' }}>{players.p1}</b></p>
                            <p><strong>Player 2</strong>: <b style={{ color: '#0dcaf0' }}>{players.p2}</b></p>
                            <p><strong>Current Turn</strong>: {players.turn === 'p1' ? <span className="badge bg-success">Player 1</span> : <span className="badge bg-info">Player 2</span>}</p>
                        </div>
                    </div>

                }

                {resultList}
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-danger btn-sm" onClick={() => resetEverything()}>Reset</button>
            </div>

            
        </Fragment >
    )
}

const mapDispatchToProps = dispatch => ({
    resetEverything: () => {
        dispatch(resetEverything())
        dispatch(resetPlayer())
        dispatch(resetResult())

    }
})

// NOTE: the structure of connect looks like connect(mapStateToProps, mapDispatchToProps)

export default connect(({ board, players, result }) => ({ board, players, result }), mapDispatchToProps)(Board);