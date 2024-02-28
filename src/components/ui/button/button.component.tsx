import hoc from "@/utils/hoc";
import { FC, ReactNode, useMemo } from "react";

export interface IProps {
  children: ReactNode;
  type: "default" | "primary";
}

const Button: FC<IProps> = hoc(({ children, type }) => {
  const styles = useMemo(
    () =>
      ({
        default:
          "bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:opacity-[0.5]",
        primary:
          "bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-[0.5]",
      })[type],
    [type]
  );

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
});
export default Button;
