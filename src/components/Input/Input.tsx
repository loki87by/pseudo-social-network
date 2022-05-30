import React from "react";
import { InputProps } from "../../utils/types";
import "./Input.css";

function Input(props: InputProps): React.ReactElement {
  return (
    <fieldset
      className="popup__fieldset"
      style={props.textArea ? { height: "178px" } : {}}
    >
      {props.textArea ? (
        <textarea
          required
          className="popup__input"
          onChange={(e) => props.setData(e.target.value)}
          value={props.data}
          placeholder={`Введите ${props.text}`}
          id={props.name}
          name={props.name}
          minLength={3}
        ></textarea>
      ) : (
        <input
          required
          type={props.type}
          className="popup__input"
          onChange={(e) => props.setData(e.target.value)}
          value={props.data}
          placeholder={`Введите ${props.text}`}
          id={props.name}
          name={props.name}
          minLength={3}
        ></input>
      )}
      <label htmlFor="name" className="popup__label">
        {`Введите ${props.text}`}
      </label>
    </fieldset>
  );
}

export default Input;
