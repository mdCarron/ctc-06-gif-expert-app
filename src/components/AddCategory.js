import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategorias((cats) => [...cats, inputValue]);
      setInputValue("");
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </Fragment>
  );
};

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};

export default AddCategory;
