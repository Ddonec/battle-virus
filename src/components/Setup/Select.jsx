import React, { useContext } from "react";
import { BoardContext } from "../../context";
import Ship from "../Ship";
import ModifyBoard from "./ModifyBoard";

function ShipSelect({ ships, randomiseBoard, resetBoard, emptyBoard }) {
   const { dragStart } = useContext(BoardContext);
   const holders = [];

   for (let i = ships.length - 1; i >= 0; i--) {
      const shipRow = ships[i];
      const shipArr = [];

      for (let b = 0; b < shipRow.length; b++) {
         const ship = shipRow[b];
         const elem = <Ship key={b} shipPosition={ship} onMouseDown={(event) => dragStart(event, ship)} onTouchStart={(event) => dragStart(event, ship)} />;
         shipArr.push(elem);
      }

      holders.unshift(
         <div key={i} className="ship-holder">
            {shipArr}
         </div>
      );
   }

   return (
      <div className="ship-select">
         <h4>Ваши помощники</h4>
         <div className="ship-wrapper">{holders}</div>
         <ModifyBoard {...{ randomiseBoard, resetBoard, emptyBoard }} />
      </div>
   );
}
export default ShipSelect;
