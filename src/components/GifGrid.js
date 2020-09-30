import React, { Fragment } from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  const { data: gifs, loading } = useFetchGif(categoria);

  return (
    <Fragment>
      <h3>{categoria}</h3>
      {loading && <p>generando gifs...</p>}
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </Fragment>
  );
};

export default GifGrid;
