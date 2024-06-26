import React, { useState } from "react";
import { GameContext } from "../context";
import { getMoves, random } from "../utils/Common";
import GameEnd from "./Game/GameEnd";
import Table from "./Game/Table";
import { CSSTransition } from "react-transition-group";
import RulesLinkModal from "./Setup/RulesLinkModal";

function GameBoard({ board1, board2, setBoard1, setBoard2, difficulty, rulesBtnL, helpBtn }) {
   const [turn, setTurn] = useState(false);
   const [moves, setMoves] = useState(getMoves(board1, difficulty));
   const [winner, setWinner] = useState(null);
   const [showRules, setShowRules] = useState(false);
   function getMove() {
      if (!moves.length) return null;

      const index = random(0, moves.length - 1);
      const move = moves[index];
      moves.splice(index, 1);
      return move;
   }
   function removeMove([cellX, cellY]) {
      const index = moves.findIndex(([x, y]) => x === cellX && y === cellY);
      if (index >= 0) moves.splice(index, 1);
   }
   console.log({ turn });

   // const openRules = () => {
   //    setShowRules(true);
   //    setShowBG(true);
   // };
   // const closeRules = () => {
   //    setShowRules(false);
   //    setShowBG(false);
   // };

   return (
      <>
         <CSSTransition in={true} appear={true} timeout={1000} classNames="page-holder">
            <div className="page-holder">
               <GameContext.Provider
                  value={{
                     turn,
                     setTurn,
                     getMove,
                     removeMove,
                     winner,
                     setWinner,
                  }}
               >
                  <Table classNames="no-events" type={0} board={board1} />
                  <div className="under-line-op under-40">
                     <RulesLinkModal ClickRLM={rulesBtnL} ClickHLM={helpBtn}></RulesLinkModal>
                  </div>
                  {/* {showRules && <Rules clickCB={openRules}></Rules>} */}
                  <div className={"way-walue-left " + (!turn ? "active" : "")}>Ход противника</div>
                  <Table type={1} board={board2} {...{ turn, setTurn }} />
                  <div className={"way-walue-right " + (turn ? "active" : "")}>Ваш ход</div>
                  <GameEnd {...{ setBoard1, setBoard2 }} />
               </GameContext.Provider>
            </div>
         </CSSTransition>
      </>
   );
}

export default GameBoard;
