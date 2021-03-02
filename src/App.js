import React, { useReducer, createContext } from "react";
import { Route, HashRouter } from "react-router-dom";
import Inicio from "./Inicio";
import Test from "./Test";
import Main from "./Main";
import statusReducer, { initialState } from "./statusReducer";

export const StatusContext = createContext();
export const StatusDispatchContext = createContext();
function App() {
  const [state, dispatch] = useReducer(statusReducer, initialState);
  return (
    <StatusDispatchContext.Provider value={dispatch}>
      <StatusContext.Provider value={state}>
        <HashRouter>
          <Route component={Main} path="/" />
          <Route component={Inicio} path="/inicio" exact />
          <Route component={Test} path="/test" exact />
        </HashRouter>
      </StatusContext.Provider>
    </StatusDispatchContext.Provider>
  );
}

export default App;
