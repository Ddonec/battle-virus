import React, { useContext } from "react";
import { GameContext } from "../../context";
import { generateBoard } from "../../utils/Common";
import { getRandomFromArray } from "../../utils/Common";

function WelcomeHi({clickCB, clickR}) {
   //    const { winner } = useContext(GameContext);

   //    function resetGame() {
   //       setBoard1([]);
   //       setBoard2(generateBoard());
   //    }

   return (
      <>
         <div className="game-start-container">
            <h3 className="game-end-header">Приветствую тебя, дорогой друг!</h3>
            <div onClick={clickR} className="close-btn">Правила</div>
            <div onClick={clickCB} className="close-btn">Старт</div>
         </div>
      </>
   );
}

export default WelcomeHi;
