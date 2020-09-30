import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(categoria).then((gifs) => {
      setState({ data: gifs, loading: false });
    });
  }, [categoria]);

  return state;
};
