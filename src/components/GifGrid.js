import React, { Fragment } from "react";
import { useFetchGif } from "../hooks/useFetchGif";
// import { getGifs } from "../helpers/getGifs";
// import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  const { data, loading } = useFetchGif();
  console.log(loading);

  /*   const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs(categoria).then((gifs) => {
      setGifs(gifs);
    });
  }, [categoria]); */

  return (
    <Fragment>
      {loading ? "cargando...." : "carga finalizada"}
      {/*       <h3>{categoria}</h3>
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div> */}
    </Fragment>
  );
};

export default GifGrid;
