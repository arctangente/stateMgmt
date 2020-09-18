import React, { useState, createContext } from "react";
export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "harru potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "game of throner",
      price: "$15",
      id: 232445,
    },
    {
      name: "inceptio",
      price: "$12",
      id: 1366,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
