import React from "react";

function WelcomeHi({ clickCB, clickR }) {
   return (
      <>
         <div className="game-start-container start-blure-bg start-second-box">
            {/* <div className="logo"></div> */}
            <div className="welcome-bg-container">
               {/* <div className="heri-hi-absolute"></div> */}
               {/* <div className="colb-absolute"></div> */}
               <div className="welocme-white-container">
                  <h3 className="welcome-title blue-text text-caps">
                     Добро пожаловать <br /> в команду!
                  </h3>
                  <div className="welcome-subtitle black-text instruction">
                     <p className="lets-ready">Присоединяйтесь к миссии «Промомед». Давайте вместе делать людей здоровыми, красивыми и счастливыми.</p>
                     <p>
                        Ежедневно человечество атакуют сотни инфекций. В борьбе за каждую жизнь мы <br /> раз за разом продолжаем отбивать их коварные нападки. Сегодня перед нами <br /> стоит сложная
                        задача: найти и обезвредить вирусы, бактерии, грибы и паразитов <br /> на игровом поле, чтобы минимизировать угрозу здоровью и жизни человечества.
                     </p>
                     <p>
                        Чтобы миссия прошла успешно, правильно экипируйтесь и эффективно <br /> используйте лекарственные средства.
                     </p>
                     <p className="lets-ready">Готовы? Тогда начинаем!</p>
                  </div>

                  <div className="btnS-area">
                     <div onClick={clickR} className="rule-btn">
                        Правила
                     </div>
                     <div onClick={clickCB} className="close-btn rules-close-btn">
                        Играть
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default WelcomeHi;
