import { SetStateAction } from "react";

const isCallable = (o: any): o is Function => {
  return typeof o === "function";
};
export const reduceSetStateAction = <S>(
  prevState: S,
  newState: SetStateAction<S>
) => {
  return isCallable(newState) ? newState(prevState) : newState;
};
