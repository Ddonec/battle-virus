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
               <div className="white-cont">
                  <div className="hero-img"></div>
                  <div>
                     <h3 className="game-end-header">
                        {winner === 0 ? (
                           <>
                              Проигран бой, но не война
                              <p className="winner-subtitle">{getRandomFromArray(stringArr)}</p>
                           </>
                        ) : (
                           <>
                              Поздравляю с победой!
                              <p className="winner-subtitle">{getRandomFromArray(stringArrWin)}</p>
                           </>
                        )}
                     </h3>
                  </div>
               </div>
                     <h5 className="shadowed-tiny">Играть снова</h5>
            </div>
         )}
      </>
   );
}

export default GameEnd;
