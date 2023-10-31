import React from "react";
import Route from "./Route";
import Dashboard from "../pages/Dashboard";
import Reservations from "../pages/Reservations/Reservations";

function Links() {
  return (
    <div>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/reservations">
        <Reservations />
      </Route>
    </div>
  );
}

export default Links;
