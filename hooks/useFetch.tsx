// hooks/useFetch.tsx
import { useReducer, useCallback } from "react";

function fetchReducer(state, action) {
  switch (action.type) {
    case "fetchAPI/request":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "fetchAPI/success":
      return {
        ...state,
        loading: false,
        data: action.data || [],
      };
    case "fetchAPI/error":
      return {
        ...state,
        loading: false,
        error: action.error || null,
      };
    case "fetchAPI/reset":
      return {
        loading: false,
        data: [],
        error: null,
      };
    default:
      return state;
  }
}

export const useFetch = () => {
  const [state, dispatch] = useReducer(fetchReducer, {
    loading: false,
    data: [],
    error: null,
  });

  // Tạo hàm fetch có thể gọi bất kỳ lúc nào
  const execute = useCallback(async (url: string) => {
    dispatch({ type: "fetchAPI/request" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "fetchAPI/success",
        data: data,
      });
      return data; // Trả về data nếu cần
    } catch (e) {
      dispatch({
        type: "fetchAPI/error",
        error: e,
      });
      throw e;
    }
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "fetchAPI/reset" });
  }, []);

  return {
    ...state,
    execute, // Hàm để call API
    reset, // Hàm reset state
  };
};
