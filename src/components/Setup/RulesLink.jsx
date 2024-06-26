import React, { useState, useEffect } from "react";
import HelpLink from "./ HelpLink";

function RulesLink({ ClickRL, clickHL }) {
   const [textIndex, setTextIndex] = useState(0);
   const texts = [
      "Между объектами на поле должна быть минимум одна пустая клетка.",
      "Можно размещать объекты вплотную к границам игрового поля.",
      "Уничтоженный арсенал отображается сбоку от зоны каждого игрока.",
      "Объект можно повернуть на 90°, нажав на него мышкой (или пальцем при игре с телефона)",
   ];

   useEffect(() => {
      const interval = setInterval(() => {
         setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 6000);

      return () => clearInterval(interval);
   }, []);

   return (
      <>
         <div className="rules-and-help">
            <div className="ruler-s-p" onClick={ClickRL}>
               <p>Правила</p>
               <p className="info-rect">i</p>
            </div>
            {/* <div className="help-info-box"> */}
            {/* <div className="help-info__title">Подсказки:</div> */}
            <div className="help-info__subtitle">{texts[textIndex]}</div>
            {/* </div> */}

            <HelpLink ClickHLM={clickHL}></HelpLink>
         </div>
      </>
   );
}

export default RulesLink;
