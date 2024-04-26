import React from "react";

function ShipList({ type, shipList }) {
   // Функция для получения максимального размера корабля в списке
   const getMaxShipSize = (ships) => {
      let maxSize = 0;
      ships.forEach((ship) => {
         const shipSize = Math.max(ship.w, ship.h);
         if (shipSize > maxSize) {
            maxSize = shipSize;
         }
      });
      return maxSize;
   };

   // Функция для сравнения двух списков кораблей на основе максимального размера
   const compareShipLists = (shipListA, shipListB) => {
      const maxSizeA = getMaxShipSize(shipListA);
      const maxSizeB = getMaxShipSize(shipListB);
      return maxSizeA - maxSizeB;
   };

   // Сортируем shipList на основе максимального размера корабля в каждом списке
   const sortedShipList = shipList.slice().sort(compareShipLists);

   return (
      <div className={"shipList-container " + (type === 0 ? "align-left" : "align-right")}>
         {sortedShipList.map((ships, index) => {
            return (
               <div key={index} className="list-holder">
                  {ships.map((ship, index) => {
                     const shipNames = ["ship-preview", type === 0 ? "ship-status-you" : "ship-status-opp", "ship-" + Math.max(ship.w, ship.h), ship.health > 0 ? "ship-blue" : "ship-red"];
                     return <div key={index} className={shipNames.join(" ")}></div>;
                  })}
               </div>
            );
         })}
      </div>
   );
}
export default ShipList;
