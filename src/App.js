import React, { useState } from "react";
import useWindowSize from "./hooks/useWindowSize";
import "./styles/App.css";
import "./styles/Board.css";
import "./styles/Ship.css";
import { generateBoard, getScale } from "./utils/Common";
import SetupBoard from "./components/SetupBoard";
import GameBoard from "./components/GameBoard";
import { CSSTransition } from "react-transition-group";
import WelcomeHi from "./components/Game/WelcomeHello";
import Rules from "./components/Game/Rules";
import Help from "./components/Game/Help";
import StartModal from "./components/Game/StartModal";
import RulesLink from "./components/Setup/RulesLink";
import RulesLinkModal from "./components/Setup/RulesLinkModal";
import HelpLink from "./components/Setup/ HelpLink";
import FIllBG from "./components/FIllBG";

function App() {
   const size = useWindowSize();
   const scale = getScale(size);
   const [showStartModal, setShowStartModal] = useState(true);
   const [showStart, setShowStart] = useState(true);
   const [showRules, setShowRules] = useState(false);
   const [showHelp, setShowHelp] = useState(false);
   const [difficulty, setDifficulty] = useState(0);
   const [board1, setBoard1] = useState([]);
   const [board2, setBoard2] = useState(generateBoard());
   const [showContainer, setShowContainer] = useState(false);
   const [showBG, setShowBG] = useState(false);

   const rulesBtn = () => {
      setShowRules(true);
      setShowStart(false);
      setShowContainer(false);
      setShowBG(true);
   };
   const helpBtn = () => {
      setShowHelp(true);
      setShowStart(false);
      setShowContainer(false);
      setShowBG(true);
   };

   const closeBtb = () => {
      setShowStart(false);
      setShowRules(false);
      setShowContainer(true);
      setShowBG(false);
      setShowHelp(false);
   };

   const closeBtnModal = () => {
      setShowStartModal(false);
      setShowContainer(false);
      setShowBG(true);
   };

   return (
      <>
         <div className="page-container no-select" style={{ transform: "translate(-50%, -50%) scale(" + scale + ")" }}>
            {showContainer && (
               <div className="page-wrapper">
                  <div className="logo-container">{/* <h1 className="logo-text ">ПРОМОМЕD</h1> */}</div>
                  {board1.length === 10 ? (
                     <GameBoard {...{ board1, board2, setBoard1, setBoard2, difficulty, rulesBtn, helpBtn }}></GameBoard>
                  ) : (
                     <SetupBoard {...{ scale, setBoard1, difficulty, setDifficulty }}></SetupBoard>
                  )}
               </div>
            )}
            {showContainer &&
               (board1.length === 10 ? (
                  // <RulesLinkModal ClickRLM={rulesBtn} ClickHLM={helpBtn}></RulesLinkModal>
                  ''
               ) : (
                  <div className="under-line-op line-main">
                     <RulesLink ClickRL={rulesBtn} clickHL={helpBtn}></RulesLink>
                  </div>
               ))}
            {showRules && <Rules clickCB={closeBtb} />}
            {showHelp && <Help clickHB={closeBtb} />}
            {showStart && <WelcomeHi clickCB={closeBtb} clickR={rulesBtn} />}
            {showStartModal && <StartModal clickHide={closeBtnModal} />}
         </div>
         {showBG && <FIllBG />}
      </>
   );
}

export default App;
