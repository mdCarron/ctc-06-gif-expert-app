import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test del componente <GifGridItem />", () => {
  const title = "Titulo de string";
  const url = "https://localhost/direccion-en-url.jpg";

  test("should renderizar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
