import React, { useContext } from "react";
import { GameContext } from "../../context";
import { generateBoard } from "../../utils/Common";
import { getRandomFromArray } from "../../utils/Common";

function WelcomeHi({ clickCB, clickR }) {
   return (
      <>
         <div className="game-start-container">
            <div className="logo"></div>
            <div className="blue-container">
               <div className="hero-img"></div>
               <div className="justify-left">
                  <div className="border-w-div">игра</div>
                  <h3 className="welcome-title ">Морской бой</h3>
                  <p className="welcome-subtitle">Ученые против микробов</p>
               </div>
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
      </>
   );
}

export default WelcomeHi;
