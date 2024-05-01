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
import StartModal from "./components/Game/StartModal";
import RulesLink from "./components/Setup/RulesLink";

function App() {
   const size = useWindowSize();
   const scale = getScale(size);
   const [showStartModal, setShowStartModal] = useState(true);
   const [showStart, setShowStart] = useState(true);
   const [showRules, setShowRules] = useState(false);
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

   const closeBtb = () => {
      setShowStart(false);
      setShowRules(false);
      setShowContainer(true);
      setShowBG(false);
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
                     <GameBoard {...{ board1, board2, setBoard1, setBoard2, difficulty }}></GameBoard>
                  ) : (
                     <SetupBoard {...{ scale, setBoard1, difficulty, setDifficulty }}></SetupBoard>
                  )}
               </div>
            )}
            {showContainer && (board1.length === 10 ? "" : <RulesLink ClickRL={rulesBtn}></RulesLink>)}
            {showRules && <Rules clickCB={closeBtb} />}
            {showStart && <WelcomeHi clickCB={closeBtb} clickR={rulesBtn} />}
            {showStartModal && <StartModal clickHide={closeBtnModal} />}
         </div>
         {showBG && (
            <div className="fill-bg-container">
               <div className="logo-l-cont"></div>
            </div>
         )}
      </>
   );
}

export default App;
