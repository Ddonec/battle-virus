import React from "react";

function StartModal({ clickHide }) {
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
               <div onClick={clickHide} className="close-btn">
                  Приступить
               </div>
            </div>
         </div>
      </>
   );
}

export default StartModal;
