import React, { useContext } from "react";
import { GameContext } from "../../context";
import { generateBoard } from "../../utils/Common";
import { getRandomFromArray } from "../../utils/Common";

function GameEnd({ setBoard1, setBoard2 }) {
   const stringTitleLostArr = ["Почти получилось! ", "Противник хорошо маскируется", "Вы раскрыты, миссия провалена!"];
   const stringArr = ["Готовьте новых агентов и продолжайте миссию!", "Используйте план Б и повторите попытку!", "Не сдавайтесь, попробуйте еще раз! "];
   const stringArrWin = [`Все инфекции найдены и обезврежены! <br/>Мы гордимся, что Вы часть нашей команды!`];
   const imgArr = ["hero-loser-1", "hero-loser-2", "hero-loser-3"];

   const { winner } = useContext(GameContext);

   function resetGame() {
      setBoard1([]);
      setBoard2(generateBoard());
   }
   return (
      <>
         {winner !== null && (
            <div className="game-end-container">
               <div className="game-end-logo"></div>
               <div className="game-end-box">
                  <div className="white-cont">
                     <div className={winner === 0 ? getRandomFromArray(imgArr) : "hero-img-winner"}></div>
                     <div>
                        <h3 className="game-end-header">
                           {winner === 0 ? (
                              <>
                                 {getRandomFromArray(stringTitleLostArr)}
                                 <p className="winner-subtitle">{getRandomFromArray(stringArr)}</p>
                              </>
                           ) : (
                              <>
                                 Поздравляем, <br /> Ваша миссия выполнена!
                                 <p className="winner-subtitle">
                                    Все инфекции найдены и обезврежены! <br />
                                    Мы гордимся, что Вы часть нашей команды!
                                 </p>
                              </>
                           )}
                        </h3>
                        <div onClick={resetGame} className="go-next-btn">
                           Играть снова
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default GameEnd;
