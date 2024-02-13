import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { data } from "./data/data";
import "./assets/scss/style.scss";
import Home from "./pages/home";
import Project from "./pages/project";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header data={data} />
        <Routes>
          <Route exact path="/*" element={<Home data={data} />} />
          <Route exact path="/projects/:slug" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
