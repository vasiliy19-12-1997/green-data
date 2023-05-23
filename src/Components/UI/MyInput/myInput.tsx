import { FC, HTMLInputTypeAttribute } from "react";
import s from "./myInput.module.scss";

interface MyInputProps {
  value?: string;
  onChange?: (query: React.ChangeEvent<HTMLInputElement> & string) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const MyInput: FC<MyInputProps> = ({ ...props }) => {
  const { placeholder } = props;
  return (
    <div className={s.Input}>
      <input placeholder={placeholder} className={s.InputI} {...props} />
    </div>
  );
};

export default MyInput;
