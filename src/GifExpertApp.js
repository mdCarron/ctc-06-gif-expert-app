import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([
    "Super Mario",
    "Zelda",
    "Final Fantasy",
  ]);

  const handleAdd = () => {
    setCategorias([...categorias, "Metroid"]);
  };

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} categorias={categorias} />
      <hr />
      <ul>
        {categorias.map((categoria) => {
          return <li key={categoria}>{categoria}</li>;
        })}
      </ul>
    </Fragment>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
