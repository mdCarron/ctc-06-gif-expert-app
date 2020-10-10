import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test del componente <GifGridItem />", () => {
  const title = "Titulo de string";
  const url = "https://localhost/direccion-en-url.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should renderizar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should prop titulo mostrarse dentro de un tag p", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("should props de tag img recibir los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should div contener la class animate__fadeInLeft", () => {
    const div = wrapper.find("div");
    expect(div.prop("className")).toContain("animate__fadeInLeft");
  });
});
