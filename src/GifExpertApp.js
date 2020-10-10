import React, { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Metroid"]);

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} categorias={categorias} />
      <hr />
      <ul>
        {categorias.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
        ))}
      </ul>
    </Fragment>
  );
};

export default GifExpertApp;
