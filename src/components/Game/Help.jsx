import React from "react";

function Help({ clickHB }) {
   return (
      <>
         <div className="game-start-container rules-update help-update">
            {/* <div className="logo"></div> */}
            {/* <div className="rules-bg-container"> */}
            <div className="welocme-white-container rules-white help-white">
               <h3 className="welcome-title blue-text">Подсказки</h3>
               {/* <p className="lets-ready rules-1-b">«Миссия: найти и обезвредить»</p> */}
               <div className="welcome-subtitle black-text rules hepl">
                  <p>
                     <div className="number-list">1</div>Между объектами на поле должна быть минимум одна пустая клетка.
                  </p>
                  <p>
                     <div className="number-list">2</div>Объект можно повернуть на 90 градусов, нажав на него мышкой (или пальцем при игре с телефона).
                  </p>
                  <p>
                     <div className="number-list">3</div>Можно размещать объекты вплотную к границам игрового поля.
                  </p>
                  <p>
                     <div className="number-list">4</div>Уничтоженный арсенал отображается сбоку от зоны каждого игрока.
                  </p>
               </div>

               <div className="btnS-area rules-btn">
                  <div onClick={clickHB} className="close-btn rules-close-btn">
                     Хорошо
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Help;
