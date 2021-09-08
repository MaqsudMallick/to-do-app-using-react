import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.handlingChange}
        type="text"
        value={props.providedToDo}
      />
      <button onClick={props.addingItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
