import { getGifs } from "../../helpers/getGifs";

describe("tests en helper getGifs", () => {
  test("should traer 10 elementos", async () => {
    const listaGifs = await getGifs("nes");
    expect(listaGifs.length).toBe(10);
  });

  test("should devolver un arreglo vacio", async () => {
    const listaGifs = await getGifs("");
    expect(listaGifs.length).toBe(0);
  });
});
