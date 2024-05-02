import React, { useContext } from "react";
import { GameContext } from "../../context";
import { generateBoard } from "../../utils/Common";
import { getRandomFromArray, getRandomNumber } from "../../utils/Common";

function GameEnd({ setBoard1, setBoard2 }) {
   const stringTitleLostArr = ["Почти получилось! ", "Противник хорошо маскируется", "Вы раскрыты, миссия провалена!"];
   const stringArr = ["Готовьте новых агентов", "Используйте план Б", "Не сдавайтесь,"];
   const stringArrNext = [" и продолжайте миссию!", " и повторите попытку!", "попробуйте еще раз! "];
   const imgArr = ["hero-loser-1", "hero-loser-2", "hero-loser-3"];

   const { winner } = useContext(GameContext);

   function resetGame() {
      setBoard1([]);
      setBoard2(generateBoard());
   }
   let i = getRandomNumber();
   console.log(i);
   return (
      <>
         {winner !== null && (
            <div className="game-end-container">
               <div className="game-end-logo"></div>
               <div className="game-end-box">
                  <div className="white-cont">
                     <div className={winner === 0 ? imgArr[i] : "hero-img-winner"}></div>
                     <div>
                        <h3 className="game-end-header">
                           {winner === 0 ? (
                              <>
                                 {stringTitleLostArr[i]}
                                 <p className="winner-subtitle">
                                    {stringArr[i]}
                                    <br />
                                    {stringArrNext[i]}{" "}
                                 </p>
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
