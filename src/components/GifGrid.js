import React from "react";
import PropTypes from "prop-types";

const GifGrid = ({ categoria }) => {
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
  };
  getGifs();

  return (
    <div>
      <h3>{categoria}</h3>
    </div>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
