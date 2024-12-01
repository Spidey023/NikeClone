import style from "./Input.module.scss";

function Input(props) {
  return (
    <>
      <div className={style["input-container"]}>
        <label htmlFor={props.name}>{props.label}</label>
        <input
          type={props.type}
          name={props.name}
          defaultValue={props.defaultValue}
        />
      </div>
    </>
  );
}

export default Input;
