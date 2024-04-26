import React from "react";

function ModifyBoard({ randomiseBoard, resetBoard }) {
    return (
        <div className="board-modify">
            <div onClick={() => randomiseBoard()} className="modify-text">Расставить</div>
            <div onClick={() => resetBoard()} className="modify-text">Сбросить</div>
        </div>
    )
}

export default ModifyBoard;