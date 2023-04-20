import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
            <Routes>
              <Route
                path="/profile/*"
                element={<Profile posts={props.state.profilePage} />}
              />
              <Route
                path="/dialogs/*"
                element={<Dialogs state={props.state.dialogsPage} />}
              />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
