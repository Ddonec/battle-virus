import React from "react";

function ModifyBoard({ randomiseBoard, resetBoard, emptyBoard }) {
   return (
      <div className="board-modify">
         {emptyBoard ? (
            <div onClick={() => randomiseBoard()} className="modify-text">
               Случайная расстановка
            </div>
         ) : (
            <div onClick={() => resetBoard()} className="modify-text">
               Сбросить
            </div>
         )}
      </div>
   );
}

export default ModifyBoard;
