
import React, { useState, useEffect } from "react";

const Player = ({ initialName, symbol, isActive, onNameChange }) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setPlayerName(initialName);
    }, [initialName]);

    function handleEditClick() {
        if (isEditing && onNameChange) {
            onNameChange(playerName);
        }
        setIsEditing(prev => !prev);
    }

    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    const editablePlayerName = isEditing ? (
        <input type="text" value={playerName} onChange={handleChange} />
    ) : (
        <span className="player-name">{playerName.toUpperCase()}</span>
    );

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
};

export default Player;
