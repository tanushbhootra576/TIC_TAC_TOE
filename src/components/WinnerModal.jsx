
import React from "react";
import PropTypes from "prop-types";
import "../index.css";

const WinnerModal = ({ winner, onReset }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}</h2>
        <button onClick={onReset}>Restart Game</button>
      </div>
    </div>
  );
};

WinnerModal.propTypes = {
  winner: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default WinnerModal;
