import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Metroid"]);

  const handleAdd = () => {
    setCategorias([...categorias, "Metroid"]);
  };

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

GifExpertApp.propTypes = {};

export default GifExpertApp;
