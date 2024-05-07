import React from "react";

function HelpLink({ ClickRLM }) {

   return (
      <>
         <div className="rules-and-help help-modal-link">
            <div className="ruler-s-p" onClick={ClickRLM}>
               <p>Подсказки</p>
               <p className="info-rect">i</p>
            </div>
         </div>
      </>
   );
}

export default HelpLink;
