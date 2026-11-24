"use client";

import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface UseSessionStorageOptions<T> {
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
}

interface UseSessionStorageReturn<T> {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  isHydrated: boolean;
}

export function useSessionStorage<T>(
  key: string,
  initialValue: T,
  options: UseSessionStorageOptions<T> = {},
): UseSessionStorageReturn<T> {
  const [value, setValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  const serialize = options.serialize ?? JSON.stringify;
  const deserialize = options.deserialize ?? JSON.parse;

  useEffect(() => {
    try {
      const storedValue = window.sessionStorage.getItem(key);

      if (storedValue !== null) {
        setValue(deserialize(storedValue));
      }
    } catch {
    } finally {
      setIsHydrated(true);
    }
  }, [key, deserialize]);

  useEffect(() => {
    if (!isHydrated) return;

    try {
      window.sessionStorage.setItem(key, serialize(value));
    } catch {
    }
  }, [key, value, isHydrated, serialize]);

  return {
    value,
    setValue,
    isHydrated,
  };
}
