import React, { useState, useEffect } from "react";
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
    console.log(gifs);
    setGifs(gifs);
  };

  return (
    <div>
      <h3>{categoria}</h3>

      {gifs.map((gif) => (
        <GifGridItem key={gif.id} {...gif} />
      ))}
    </div>
  );
};

export default GifGrid;
