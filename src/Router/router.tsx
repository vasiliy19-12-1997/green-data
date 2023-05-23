import Main from "../Pages/Main/main";
import Login from "../Pages/Login/login";
export const privateRoutes = [{ path: "/TodoList", element: Main }];
export const publicRoutes = [{ path: "/login", element: Login }];
