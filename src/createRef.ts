// @deno-types="npm:@types/react@^18.2"
import { RefObject } from 'react';

/**
 * creates a Ref object with on change callback
 * @param callback
 * @returns {RefObject}
 *
 * @see {@link useCallbackRef}
 * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 */
export function createCallbackRef<T>(callback: (newValue: T | null, lastValue: T | null) => any): RefObject<T> {
  let current: T | null = null;

  return {
    get current() {
      return current;
    },
    set current(value: T | null) {
      const last = current;

      if (last !== value) {
        current = value;
        callback(value, last);
      }
    },
  };
}
