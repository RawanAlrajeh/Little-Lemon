import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Links from "./Routes/Links";
import { NavigationProvider } from "./context/navigation";

function App() {
  return (
    <NavigationProvider>
      <div>
        <Sidebar />
        <div>
          <Links />
        </div>
      </div>
    </NavigationProvider>
  );
}

export default App;
