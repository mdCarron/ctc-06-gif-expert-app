import React from "react";
import "@testing-library/jest-dom";
import AddCategory from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("test en componente <AddCategory />", () => {
  const setCategorias = jest.fn();
  let wrapper = shallow(<AddCategory setCategorias={setCategorias} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategorias={setCategorias} />);
  });

  test("should snapshot match", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("should NO debe poster la información en el submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategorias).not.toHaveBeenCalled();
  });
});
