import React, { useContext } from "react";
import { GameContext } from "../../context";
import { generateBoard } from "../../utils/Common";
import { getRandomFromArray } from "../../utils/Common";

function Rules({ clickCB }) {
   //    const { winner } = useContext(GameContext);

   //    function resetGame() {
   //       setBoard1([]);
   //       setBoard2(generateBoard());
   //    }

   return (
      <>
         <div className="game-start-container">
            <h3 className="game-end-header">
               ам нужно вычислить их местоположение на поле 20х20 до того, как они найдут и испортят ваши инструменты-фишки. После клика по пустой клетке открывается что под ней. Это может быть
               вражеская фишка или ничего.
            </h3>
            <div onClick={clickCB} className="close-btn">
               Старт игры
            </div>
         </div>
      </>
   );
}

export default Rules;
