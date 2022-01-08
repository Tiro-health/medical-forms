import React, {
  SetStateAction,
  useContext,
  Dispatch,
  useCallback,
} from "react";

import { reduceSetStateAction } from "util/dispatch"
import { IQuantity } from "./types";

export const QuantityContext =
  React.createContext<[IQuantity, Dispatch<SetStateAction<IQuantity>>] | null>(
    null
  );

export interface IQuantityReturnType {
  value?: number | undefined,
  unit?: string,
  onValueChange: Dispatch<SetStateAction<number | undefined>>
  onUnitChange: Dispatch<SetStateAction<string | undefined>>
}
const useQuantity = (value?: [IQuantity, Dispatch<SetStateAction<IQuantity>>]): IQuantityReturnType => {
  const context = useContext(QuantityContext);
  const state = value ?? context
  if (!state) {
    throw Error(
      "Please use 'useQuantity' only inside a <Quantity/> element or pass it's value as an attribute."
    );
  }
  const [quantity, onQuantityChange] = state;

  const onValueChange = useCallback(
    (value: SetStateAction<number | undefined>) => onQuantityChange((q) => ({ ...q, value: reduceSetStateAction(q.value, value) })),
    [onQuantityChange]
  );
  const onUnitChange = useCallback(
    (unit: SetStateAction<string | undefined>) => onQuantityChange((q) => ({ ...q, unit: reduceSetStateAction(q.unit, unit) })),
    [onQuantityChange]
  );
  return {
    ...quantity,
    onValueChange,
    onUnitChange,
  };
};

interface IQuantityProps {
  quantity: IQuantity;
  onQuantityChange: Dispatch<SetStateAction<IQuantity>>
}

const QuantityRenderChildren = ({ quantity, onQuantityChange, children }: IQuantityProps & { children?: React.FunctionComponent<IQuantityReturnType> }) => {
  const quantityChildrenProps = useQuantity([quantity, onQuantityChange])
  return !!children ? children(quantityChildrenProps):null
}

export const Quantity = ({
  quantity ,
  onQuantityChange ,
  children,
}: {
  quantity: IQuantity;
  onQuantityChange: Dispatch<SetStateAction<IQuantity>>;
  children?: React.ReactNode | React.FunctionComponent<IQuantityReturnType>
}) => {
  if (typeof children == "function") {
    // pass quantity state handlers by rendering children
    return (
      <QuantityRenderChildren quantity={quantity} onQuantityChange={onQuantityChange}>
        {children as React.FunctionComponent<IQuantityReturnType>}
      </QuantityRenderChildren>
    )
  }
  return (
    // pass quanitty state handlers by context
    <QuantityContext.Provider value={[quantity, onQuantityChange]}>
      {children}
    </QuantityContext.Provider>
  );
};
