import styles from "./button.module.scss";

export type ButtonProps = {
  children: string;
  withIcon?: boolean;
};

export const Button = ({ children, withIcon }: ButtonProps) => {
  return (
    <button className={styles.button}>
      {withIcon && <div className={styles.icon}>+</div>}
      <div className={styles.textContainer}>{children}</div>
    </button>
  );
};
