/* * */
/* IMPORTS */
import React from "react";

/* * */
/* * * * */
function ConfirmButton({ enabled, onClick }) {
  return (
    <div
      className={
        "display-card text-center animate p-5 m-3 w-100" +
        (enabled ? " sh-light cursor-pointer confirmButton" : " disabled")
      }
      onClick={() => enabled && onClick()}
    >
      <h1 style={{ fontSize: 30 }}>Confirmar</h1>
    </div>
  );
}

/* * */
export default ConfirmButton;
