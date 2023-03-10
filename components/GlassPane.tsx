import "@/styles/global.css";
import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const GlassPane: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
