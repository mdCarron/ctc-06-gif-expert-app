import { useFetchGif } from "../../hooks/useFetchGif";
import { renderHook } from "@testing-library/react-hooks";

describe("testing de custom hook useFetchGif", () => {
  test("should retornar state inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif("super nintendo")
    );

    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should retornar array de 10 gifs y loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif("super nintendo")
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
