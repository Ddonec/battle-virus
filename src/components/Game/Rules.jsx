import React from "react";

function Rules({ clickCB }) {
   return (
      <>
         <div className="game-start-container">
            <div className="logo"></div>
            <div className="blue-container">
               <div className="hero-img"></div>
               <div className="ram-border">
                  <h3 className="rules-title ">Это игра про бой ученых с микроорганизмами</h3>
                  <p className="rules-subtitle">
                     Вам нужно вычислить их местоположение на поле 20х20 до того, как они найдут и испортят ваши инструменты-фишки. После клика по пустой клетке открывается что под ней. Это может быть
                     вражеская фишка или ничего.
                  </p>
               </div>
            </div>
            <div onClick={clickCB} className="close-btn">
               Старт
            </div>
         </div>
      </>
   );
}

export default Rules;
