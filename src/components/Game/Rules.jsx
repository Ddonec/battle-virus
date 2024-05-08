import React from "react";

function Rules({ clickCB }) {
   return (
      <>
         <div className="game-start-container rules-update">
            {/* <div className="logo"></div> */}
            {/* <div className="rules-bg-container"> */}
            <div className="welocme-white-container rules-white">
               <h3 className="welcome-title blue-text">Правила игры </h3>
               <p className="lets-ready rules-1-b">«Миссия: найти и обезвредить»</p>
               <div className="welcome-subtitle black-text rules">
                  <p>
                     <div className="number-list">1</div>Ваши помощники в игре — лекарственные средства. <br /> Расположите их в своей зоне самостоятельно или воспользуйтесь кнопкой «Случайная
                     расстановка». Вы можете менять положение лекарственных средств бесконечное количество раз.
                  </p>
                  <p>
                     <div className="number-list">2</div>На стороне оппонента — бактерии, грибы, вирусы и паразиты.
                  </p>
                  <p>
                     <div className="number-list">3</div>Ваша задача — обезвредить все виды инфекций до того, как они уничтожат Ваш лекарственный арсенал.
                  </p>
                  <p>
                     <div className="number-list">4</div>Выберите курсором место в зоне соперника, где, по-Вашему, он скрывает своих болезнетворных агентов.
                  </p>
                  <p>
                     <div className="number-list">5</div>Ваше попадание в цель оставляет следующий ход за Вами. Ваш промах дает возможность ответить Вашему противнику.
                  </p>
                  <p>
                     <div className="number-list">6</div>Победителем считается тот, кто первым найдет и обезвредит весь потенциал противника!
                  </p>
               </div>
               <p className="lets-ready get-luck ">Удачи!</p>

               <div className="btnS-area rules-btn">
                  <div onClick={clickCB} className="close-btn rules-close-btn">
                     Играть
                  </div>
               </div>
               {/* </div> */}
            </div>
         </div>
      </>
   );
}

export default Rules;
