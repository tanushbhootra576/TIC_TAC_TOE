// import React from "react";

// const GameBoard = ({ onSelectSquare, board }) => {
//     return (
//         <ol id="game-board">
//             {board.map((row, rowIndex) => (
//                 <li key={rowIndex}>
//                     <ol>
//                         {row.map((playerSymbol, colIndex) => (
//                             <li key={colIndex}>
//                                 <button
//                                     onClick={() => onSelectSquare(rowIndex, colIndex)}
//                                     disabled={playerSymbol !== null}
//                                 >
//                                     {playerSymbol || ""}
//                                 </button>
//                             </li>
//                         ))}
//                     </ol>
//                 </li>
//             ))}
//         </ol>
//     );
// };

// export default GameBoard;
import React from "react";
import "../index.css";

const GameBoard = ({ onSelectSquare, board }) => {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}
                                >
                                    {playerSymbol || ""}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
};

export default GameBoard;
