import React from "react";
import FlagsList from "./components/FlagsList";
import FlagContextProvider from "./context/FlagsContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlagInfo from "./components/FlagInfo";
import HeadTheme from "./components/HeadTheme";

const App = () => {
  return (
    <BrowserRouter>
      <FlagContextProvider>
        <HeadTheme />
        <Routes>
          <Route path="/" element={<FlagsList />} />
          <Route path="/country" element={<FlagInfo />} />
        </Routes>
      </FlagContextProvider>
    </BrowserRouter>
  );
};

export default App;
