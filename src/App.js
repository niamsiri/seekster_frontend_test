import { cloneElement } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "./routes";

function App() {
  return (
    <Routes>
      {routes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            element={cloneElement(prop.component)}
            key={key}
          />
        );
      })}
    </Routes>
  );
}

export default App;
