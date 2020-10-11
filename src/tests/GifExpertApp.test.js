import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("testing en componente <GifExpertApp />", () => {
  test("should hacer match con snapshot", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should iniciar con las categorias indicadas", () => {
    const categorias = ["super nintendo", "nes"];
    const wrapper = shallow(<GifExpertApp defaultCategorias={categorias} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categorias.length);
  });
});
