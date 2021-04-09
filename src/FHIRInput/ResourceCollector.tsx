import React, { useCallback, useContext, useState } from "react";
import UUID from "uuidjs";
import { enableMapSet } from "immer";
import { useImmerReducer } from "use-immer";
import { Resource } from "./models";
enableMapSet();

type IResourceMap = Map<string, Resource | null>;

const initResourceMap = (): IResourceMap => {
  return new Map();
};

type BundleOperation =  "create" | "read" | "update" | "delete";
interface AbstractBundleAction {
  operation: BundleOperation;
  uri: string;
  resource: Partial<Resource> | Resource | null;
}
interface BundleUpdateAction extends AbstractBundleAction {
  operation: BundleOperation;
  uri: string;
  resource: Resource | null;
}
type BundleAction = BundleUpdateAction;
function resourceMapReducer(
  draft: IResourceMap,
  action: BundleAction
): IResourceMap | void {
  switch (action.operation) {
    case "create": 
      if (draft.has(action.uri)){
        throw new Error("Unable to create resource because URI is already taken.")
      }
      if(!action.resource){
        draft.set(action.uri, null)
      }else{
        draft.set(action.uri, action.resource)
      }
      return draft;
    case "update":
      if (!draft.has(action.uri)) {
          draft.set(action.uri, null)
      }
      if (!!action.resource) {
        if (draft.get(action.uri)) {
          draft.set(
            action.uri,
            Object.assign(draft.get(action.uri), action.resource)
          );
        } else {
          draft.set(action.uri, action.resource);
        }
      }
      return draft;
      
  }
}

export const ResourceMapContext = React.createContext<
  [IResourceMap, React.Dispatch<BundleAction>] | null
>(null);


export const useFHIRResourceCollector = ()=>useImmerReducer(
    resourceMapReducer,
    initResourceMap()
  );

export const ResourceCollector: React.FunctionComponent = ({ children, }) => {
  const [bundle, dispatch] = useImmerReducer(
    resourceMapReducer,
    initResourceMap()
  );

  return (
    <ResourceMapContext.Provider value={[bundle, dispatch]}>
      {children}
    </ResourceMapContext.Provider>
  );
};
const generateURI = () => UUID.genV4().urn;

export const useFHIRResource = (initURI?: string) => {
  const [uri] = useState<string>(initURI || generateURI);
  
  const bundleContext = useContext(ResourceMapContext);
  if (!bundleContext) {
    throw Error("No FHIR Bundle defined in the BundleContext.");
  }
  const [bundle, dispatch] = bundleContext;

  const update = useCallback((resource: Resource | null) => {
    dispatch({ operation: "update", uri, resource });
  },[uri, dispatch]);

  return [uri, bundle.get(uri), update] as [string, Resource, (resource: Resource)=>void];
};
