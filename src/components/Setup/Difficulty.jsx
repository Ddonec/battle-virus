import React, { useState } from "react";

function Difficulty({ difficulty, setDifficulty }) {
    const [levels, setLevels] = useState([
        {
            id: 0,
            title: "Легко"
        },
        {
            id: 1,
            title: "Средне"
        },
        {
            id: 2,
            title: "Сложно"
        }
    ]);
    return (
        <div className="difficulty-container">
            <h4>Выберите сложность</h4>
            <div className="difficulty-logo"></div>
            <div className="difficulty-wrap">
            {
                levels.map(level => {
                    return (
                        <label key={level.id} className="difficulty-label">
                            <input className="difficulty-radio" onChange={() => setDifficulty(level.id)} checked={difficulty === level.id} type="radio"/>
                            <span className="difficulty-text">{level.title}</span>
                        </label>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Difficulty;