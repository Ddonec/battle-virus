import React from "react";

function StartModal({ clickHide }) {
   return (
      <>
         <div className="game-start-container start-modal">
            <div className="logo"></div>
            <div className="blue-container start-blue">
               <div className="justify-left">
                  <h3 className="start-title welcome-title">МИССИЯ:</h3>
                  <p className="welcome-subtitle start-sub">найти и обезвредить</p>
                  <div className="btnS-area">
                     <div onClick={clickHide} className="close-btn">
                        Приступить
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default StartModal;
