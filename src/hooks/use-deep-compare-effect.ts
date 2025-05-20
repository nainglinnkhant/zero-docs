import isEqual from "lodash.isequal";
import { useEffect, useRef } from "react";

export function useDeepCompareEffect(
  callback: () => void,
  dependencies: unknown[]
) {
  const previousDepsRef = useRef<unknown[]>([]);

  if (!isEqual(previousDepsRef.current, dependencies)) {
    previousDepsRef.current = dependencies;
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(callback, [previousDepsRef.current]);
}
