import React, { Dispatch, SetStateAction } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { reduceSetStateAction } from "util/dispatch";
import { QuantityContext } from "./Quantity";
import { IRatio, IQuantity } from "./types";

const RatioContext = React.createContext<[IRatio, Dispatch<SetStateAction<IRatio>>] | null>(null)

export interface IRatioReturnType {
  numerator: IQuantity 
  onNumeratorChange: Dispatch<SetStateAction<IQuantity>>
  denominator: IQuantity 
  onDenominatorChange: Dispatch<SetStateAction<IQuantity>>
}

const useRatio = (value?: [ratio: IRatio, onRatioChange: Dispatch<SetStateAction<IRatio>>]):IRatioReturnType => {
  const context = useContext(RatioContext)
  const state = value ?? context
  if (!state) {
    throw Error(
      "Please use 'useRatio' or '<Ratio.xxxx /> only inside a <Ratio /> element or pass its state explicitly.'"
    )
  }
  const [ratio, onRatioChange] = state;
  const onNumeratorChange = useCallback(
    (numerator: SetStateAction<IQuantity>)=>onRatioChange((q)=>({...q, numerator: reduceSetStateAction(q.numerator, numerator)})),
    [onRatioChange]
  )
  const onDenominatorChange = useCallback(
    (denominator: SetStateAction<IQuantity>)=>onRatioChange((q)=>({...q, denominator: reduceSetStateAction(q.denominator, denominator)})),
    [onRatioChange]
  )
    return {
      ...ratio,
      onNumeratorChange,
      onDenominatorChange
    }
}

const RatioNumerator = ({children}:React.PropsWithChildren<{}>)=>{
  const {numerator, onNumeratorChange} = useRatio()
  return (
  <QuantityContext.Provider value={[numerator, onNumeratorChange]}> 
  {children}
  </QuantityContext.Provider>)
}
const RatioDenominator= ({children}:React.PropsWithChildren<{}>)=>{
  const {denominator, onDenominatorChange} = useRatio()
  return (
  <QuantityContext.Provider value={[denominator, onDenominatorChange]}> 
  {children}
  </QuantityContext.Provider>)
}

const RatioRenderChildren = ({children, ratio, onRatioChange}: {ratio: IRatio, onRatioChange: Dispatch<SetStateAction<IRatio>>, children?:React.FunctionComponent<IRatioReturnType>})=>{
  const props = useRatio([ratio, onRatioChange])
  return !!children ? children(props) : null
}

export const Ratio = ({
  ratio,
  onRatioChange,
  children
}:{ratio:IRatio, onRatioChange: React.Dispatch<SetStateAction<IRatio>>, children?: React.ReactNode | React.FunctionComponent<IRatioReturnType>})=>{
  if(typeof children === "function"){
    return <RatioRenderChildren ratio={ratio} onRatioChange={onRatioChange}>{children as React.FunctionComponent<IRatioReturnType>}</RatioRenderChildren>
  }
  return (
    <RatioContext.Provider value={[ratio, onRatioChange]}>
    {children}
    </RatioContext.Provider>
  )
}
Ratio.Numerator = RatioNumerator
Ratio.Denominator = RatioDenominator