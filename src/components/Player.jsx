// import React, { useState, useEffect } from "react";

// const Player = ({ initialName, symbol, isActive, onNameChange }) => {
//     const [playerName, setPlayerName] = useState(initialName);
//     const [isEditing, setIsEdit] = useState(false);

//     useEffect(() => {
//         setPlayerName(initialName);
//     }, [initialName]);

//     function handleEditClick() {
//         if (isEditing && onNameChange) {
//             onNameChange(playerName);
//         }
//         setIsEdit(editing => !editing);
//     }

//     function handleChange(e) {
//         setPlayerName(e.target.value);
//     }

//     let editablePlayerName = <span className="player-name">{playerName}</span>;
//     let btnCaption = "Edit";

//     if (isEditing) {
//         editablePlayerName = (
//             <input type="text" required value={playerName} onChange={handleChange} />
//         );
//         btnCaption = "Save";
//     }

//     return (
//         <li className={isActive ? "active" : ""}>
//             <span className="player">
//                 {editablePlayerName}
//                 <span className="player-symbol">{symbol}</span>
//             </span>
//             <button onClick={handleEditClick}>{btnCaption}</button>
//         </li>
//     );
// };

// export default Player;

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
