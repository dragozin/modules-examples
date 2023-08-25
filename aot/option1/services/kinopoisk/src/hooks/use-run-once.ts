import { useCallback, useRef } from "react";

export const useRunOnce = <Callback extends (...args: any[]) => void>(
  fn: Callback
) => {
  const hasRunRef = useRef(false);

  return useCallback(
    (...args: Parameters<Callback>) => {
      if (hasRunRef.current) {
        return;
      }

      fn(...args);
      hasRunRef.current = true;
    },
    [fn]
  );
};

