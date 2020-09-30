import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategorias, categorias }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, inputValue]);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </Fragment>
  );
};

AddCategory.propTypes = {};

export default AddCategory;
