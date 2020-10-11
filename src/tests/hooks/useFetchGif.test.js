import { useFetchGif } from "../../hooks/useFetchGif";
import { renderHook } from "@testing-library/react-hooks";

describe("testing de custom hook useFetchGif", () => {
  test("should retornar state inicial", () => {
    const { result } = renderHook(() => useFetchGif("super nintendo"));

    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
