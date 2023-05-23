import { FC, useContext } from "react";
import { AuthContext } from "../Context/context";
import { IAuth } from "../Types/types";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../Router/router";

const AppRouter: FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IAuth;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      {/* если пользователь введет не существующий url, то перейдем к туду листу */}
      <Route path="/*" element={<Navigate to="/todoList" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
