import styles from "./Marker.module.css";
import classNames from "classnames";
interface IMarker {
  text: string;
  size?: number;
}

export const Marker: React.FC<IMarker> = ({ text, size = 2 }) => {
  return (
    <div
      className={classNames(styles.under, `text-black_500`)}
      style={{ fontSize: `${size}em` }}
    >
      {text}
    </div>
  );
};
