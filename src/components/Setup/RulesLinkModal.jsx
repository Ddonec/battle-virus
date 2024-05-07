import React from "react";

function RulesLink({ ClickRLM }) {

   return (
      <>
         <div className="rules-and-help rules-modal-link">
            <div className="ruler-s-p" onClick={ClickRLM}>
               <p>Правила</p>
               <p className="info-rect">i</p>
            </div>
         </div>
      </>
   );
}

export default RulesLink;
