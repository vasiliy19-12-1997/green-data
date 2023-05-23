import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRouter from "./AppRouter/appRouter";
import { AuthContext } from "./Context/context";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{ isAuth, setIsAuth, setIsLoading, isLoading }}
      >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
