import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
// We import all the components we need in our app
import QuestList from "./components/crud/questList";
import Edit from "./components/crud/edit";
import Create from "./components/crud/create";
import QuestMaker from "./pages/QuestMaker";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<QuestMaker />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};
export default App;