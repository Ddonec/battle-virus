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

function App() {
   const size = useWindowSize();
   const scale = getScale(size);
   const [showStartModal, setShowStartModal] = useState(true);
   const [showStart, setShowStart] = useState(true);
   const [showRules, setShowRules] = useState(false);
   const [difficulty, setDifficulty] = useState(0);
   const [board1, setBoard1] = useState([]);
   const [board2, setBoard2] = useState(generateBoard());

   const rulesBtn = () => {
      console.log(11);
      setShowRules(true);
      setShowStart(false);
   };
   const closeBtb = () => {
      console.log(10);
      setShowStart(false);
      setShowRules(false);
   };
   const closeBtnModal = () => {
      console.log(12);

      setShowStartModal(false);
   };

   return (
      <>
         <div className="page-container no-select" style={{ transform: "translate(-50%, -50%) scale(" + scale + ")" }}>
            <div className="page-wrapper">
               <div className="logo-container">{/* <h1 className="logo-text ">ПРОМОМЕD</h1> */}</div>
               {board1.length === 10 ? (
                  <GameBoard {...{ board1, board2, setBoard1, setBoard2, difficulty }}></GameBoard>
               ) : (
                  <SetupBoard {...{ scale, setBoard1, difficulty, setDifficulty }}></SetupBoard>
               )}
            </div>
            {showStart && <WelcomeHi clickCB={closeBtb} clickR={rulesBtn} />}
            {showRules && <Rules clickCB={closeBtb} />}
            {showStartModal && <StartModal clickHide={closeBtnModal} />}
         </div>
      </>
   );
}

export default App;
