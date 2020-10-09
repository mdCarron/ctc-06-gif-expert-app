import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test del componente <GifGridItem />", () => {
  test("should renderizar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
