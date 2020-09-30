import React, { useState, useEffect, Fragment } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "http://api.giphy.com/v1/gifs/search?q=nes&limit=10&api_key=pZF5taT2C8y5Jk6AOVAZpZhF7B0b4j17";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      };
    });
    setGifs(gifs);
  };

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
