import React from "react";
import AddCategory from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("test en componente <AddCategory />", () => {
  const setCategorias = () => {};

  test("should snapshot match", () => {
    const wrapper = shallow(<AddCategory setCategorias={setCategorias} />);

    expect(wrapper).toMatchSnapshot();
  });
});
