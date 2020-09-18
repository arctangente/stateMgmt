import React, { useState, useContext } from "react";
import "./App.css";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <ul>
        <li>Tam</li>
        <li>List of movies :{movies.length}</li>
      </ul>
    </div>
  );
};

export default Nav;
