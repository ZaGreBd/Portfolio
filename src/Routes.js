import React from "react";
import { BrowserRouter, Routes as Swicth, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen"
import ProjectsScreen from "./screens/ProjectsScreen";
import PostsScreen from "./screens/PostsScreen"

function Routes() {
  return (
    <BrowserRouter>
      <Swicth>
        <Route exact path="/" element={<HomeScreen/>} />
        <Route exact path="/projects" element={<ProjectsScreen />} />
        <Route exact path="/posts" element={<PostsScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Swicth>
    </BrowserRouter>
  );
}

export default Routes;
