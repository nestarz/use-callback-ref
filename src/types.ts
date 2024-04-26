// @deno-types="npm:@types/react@^18.2"
import * as React from 'react';

export type RefCallback<T> = (newValue: T | null) => void;
export type RefObject<T> = React.MutableRefObject<T | null>;

export type DefinedReactRef<T> = RefCallback<T> | RefObject<T>;
export type ReactRef<T> = DefinedReactRef<T> | null;
