import React, { useContext } from "react";
import { GameContext } from "../../context";
import { generateBoard } from "../../utils/Common";
import { getRandomFromArray } from "../../utils/Common";

function GameEnd({ setBoard1, setBoard2 }) {
   const stringArr = [
      "Вы проиграли всего одну схватку, но эта борьба важна всему человечеству.Не сдавайтесь, и победа будет вопросом времени",
      "Вы проиграли всего одну схватку, но эта борьба важна всему человечеству.Не сдавайтесь, и победа будет вопросом времени",
      "Вы проиграли всего одну схватку, но эта борьба важна всему человечеству.Не сдавайтесь, и победа будет вопросом времени",
   ];
   const stringArrWin = [
      "Вы успешно справились с врагами! Ваш вклад был важен для человечества. Кто знает, это могла быть опасная пандемия, но благодаря вам этого удалось избежать!",
      "Вы успешно справились с врагами! Ваш вклад был важен для человечества. Кто знает, это могла быть опасная пандемия, но благодаря вам этого удалось избежать!",
      "Вы успешно справились с врагами! Ваш вклад был важен для человечества. Кто знает, это могла быть опасная пандемия, но благодаря вам этого удалось избежать!",
   ];

   const { winner } = useContext(GameContext);

   function resetGame() {
      setBoard1([]);
      setBoard2(generateBoard());
   }
   return (
      <>
         {winner !== null && (
            <div onClick={resetGame} className="game-end-container">
               <h3 className="game-end-header shadowed">{winner === 0 ? "Проигран бой, но не война " + getRandomFromArray(stringArr) : "Поздравляю с победой! " + getRandomFromArray(stringArrWin)}</h3>
               <h5 className="shadowed-tiny">Click to start a new game!</h5>
            </div>
         )}
      </>
   );
}

export default GameEnd;
