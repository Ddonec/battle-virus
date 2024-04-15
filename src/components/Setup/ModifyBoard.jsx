import React from "react";

function ModifyBoard({ randomiseBoard, resetBoard }) {
    return (
        <div className="board-modify">
            <div onClick={() => randomiseBoard()} className="modify-text">Случайная расстановка</div>
            <div onClick={() => resetBoard()} className="modify-text">Сброс</div>
        </div>
    )
}

export default ModifyBoard;