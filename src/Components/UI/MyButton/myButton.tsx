import React, { FC, PropsWithChildren } from "react";
import s from "./myButton.module.scss";
interface MyButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
}

const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <div className={s.Button}>
      <button className={s.ButtonS} {...props}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;
