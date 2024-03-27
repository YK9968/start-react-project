import css from "./Alert.module.css";
import clsx from "clsx";

export const Alert = ({ variant, children, outlined, elevated }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

export default Alert;
