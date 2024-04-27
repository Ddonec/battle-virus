import React from "react";

function WelcomeHi({ clickCB, clickR }) {
   return (
      <>
         <div className="game-start-container">
            <div className="logo"></div>
            <div className="welcome-bg-container">
               <div className="welocme-white-container">
                  <h3 className="welcome-title blue-text">
                     Добро пожаловать <br /> в команду!
                  </h3>
                  <div className="welcome-subtitle black-text instruction">
                     <p>Присоединяйтесь к миссии «Промомед». Давайте вместе делать людей здоровыми, красивыми и счастливыми.</p>
                     <p>
                        Ежедневно человечество атакуют сотни инфекций. В борьбе за каждую жизнь мы раз за разом продолжаем отбивать их коварные нападки. Сегодня перед нами стоит сложная задача: найти
                        и обезвредить вирусы, бактерии, грибы и паразитов на игровом поле, чтобы минимизировать угрозу здоровью и жизни человечества.
                     </p>
                     <p>Чтобы миссия прошла успешно, правильно экипируйтесь и эффективно используйте лекарственные средства.</p>
                     <p className="lets-ready">Готовы? Тогда начинаем!</p>
                  </div>

                  <div className="btnS-area">
                     <div onClick={clickR} className="rule-btn">
                        Правила
                     </div>
                     <div onClick={clickCB} className="close-btn">
                        Старт
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default WelcomeHi;
