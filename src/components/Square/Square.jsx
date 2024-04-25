import css from "./Square.module.css";

export default function Square({ value }) {
  return <button className={css.btn}>{value}</button>;
}
