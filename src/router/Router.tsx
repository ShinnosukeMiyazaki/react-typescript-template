import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppPage from "../components/page/App/App.page";
import { RecoilRoot } from "recoil";

export const MainRoute = () => {
  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="" element={<AppPage />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
};
