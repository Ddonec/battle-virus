import React, { useContext } from "react";
import { GameContext } from "../../context";
import { generateBoard } from "../../utils/Common";
import { getRandomFromArray } from "../../utils/Common";

function GameEnd({ setBoard1, setBoard2 }) {
   const stringArr = ["строка 1", "строка 2", "строка 3", "строка 4"];
   const stringArrWin = ["строка победы 1", "строка победы 2", "строка победы 3", "строка победы 4"];

   const { winner } = useContext(GameContext);

   function resetGame() {
      setBoard1([]);
      setBoard2(generateBoard());
   }
   return (
      <>
         {winner !== null && (
            <div onClick={resetGame} className="game-end-container">
               <h3 className="game-end-header shadowed">{winner === 0 ? "You lost " + getRandomFromArray(stringArr) : "You won " + getRandomFromArray(stringArrWin)}</h3>
               <h5 className="shadowed-tiny">Click to start a new game!</h5>
            </div>
         )}
      </>
   );
}

export default GameEnd;
