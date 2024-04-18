import React, { useContext } from "react";
import { GameContext } from "../../context";
import { generateBoard } from "../../utils/Common";
import { getRandomFromArray } from "../../utils/Common";

function WelcomeHi() {
//    const { winner } = useContext(GameContext);

//    function resetGame() {
//       setBoard1([]);
//       setBoard2(generateBoard());
//    }
//    return (
//       <>
//          {winner !== null && (
//             <div onClick={resetGame} className="game-end-container">
//                <h3 className="game-end-header shadowed">Приветствую тебя, дорогой друг!</h3>
//                <h5 className="shadowed-tiny">Нажми по полю для начала игры</h5>
//             </div>
//          )}
//       </>
//    );
console.log('Hello ------------------')
}

export default WelcomeHi;
