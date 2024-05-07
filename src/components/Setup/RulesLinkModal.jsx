import React from "react";
import HelpLink from "./ HelpLink";

function RulesLinkModal({ ClickRLM , ClickHLM }) {

   return (
      <>
         <div className="rules-and-help rules-modal-link">
            <div className="ruler-s-p" onClick={ClickRLM}>
               <p>Правила</p>
               <p className="info-rect">i</p>
            </div>
            <HelpLink ClickHLM={ClickHLM}></HelpLink>

         </div>
      </>
   );
}

export default RulesLinkModal;
