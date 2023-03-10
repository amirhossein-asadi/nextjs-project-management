import clsx from "clsx";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<Props> = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
        className
      )}
      {...props}
    />
  );
};

export default Input;
