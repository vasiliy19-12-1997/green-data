import { FC, useContext, useState } from "react";
import s from "./login.module.scss";
import MyButton from "../../Components/UI/MyButton/myButton";
import MyInput from "../../Components/UI/MyInput/myInput";
import { observer } from "mobx-react-lite";
const Login: FC = () => {
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeAdmin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Sign in{" "}
      </h1>
      <form>
        <MyInput
          type="text"
          placeholder="admin"
          value={admin}
          onChange={onChangeAdmin}
        />
        <MyInput
          type="password"
          placeholder="111"
          value={password}
          onChange={onChangePassword}
        />
        <MyButton>Sign in</MyButton>
      </form>
    </div>
  );
};

export default observer(Login);
