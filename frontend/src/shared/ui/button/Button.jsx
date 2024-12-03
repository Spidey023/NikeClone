import style from "./Button.module.scss";

export const Button = (props) => {
  return (
    <>
      <button className={style.btn}>{props.name}</button>
    </>
  );
};
