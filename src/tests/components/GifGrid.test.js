import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";
jest.mock("../../hooks/useFetchGif");

describe("testing en componente <GifGrid />", () => {
  const categoria = "super nintendo";

  test("should matchear snapshot", () => {
    useFetchGif.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid categoria={categoria} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should debe de mostrar items cuando se cargan las imagenes con useFetchGif", () => {
    const gifs = [
      {
        id: "1",
        title: "MockTitle",
        url: "https://localhost/img.gif",
      },
      {
        id: "2",
        title: "MockTitle",
        url: "https://localhost/img.gif",
      },
    ];

    useFetchGif.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid categoria={categoria} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
