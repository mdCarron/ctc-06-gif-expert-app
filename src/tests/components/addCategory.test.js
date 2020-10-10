import React from "react";
import AddCategory from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("test en componente <AddCategory />", () => {
  const setCategorias = () => {};
  const wrapper = shallow(<AddCategory setCategorias={setCategorias} />);

  test("should snapshot match", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });
});
