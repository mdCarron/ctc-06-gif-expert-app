import React, { useState, useEffect, Fragment } from "react";
import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs(categoria).then((gifs) => {
      setGifs(gifs);
    });
  }, [categoria]);

  return (
    <Fragment>
      <h3>{categoria}</h3>
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </Fragment>
  );
};

export default GifGrid;
