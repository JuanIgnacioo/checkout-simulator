import React from "react";
import CheckOut from "./Pages/Home/CheckOut";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
