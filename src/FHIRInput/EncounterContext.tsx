import React, { useContext } from 'react';
import { Encounter } from './models';
export const EncounterContext = React.createContext<Encounter | null>(null)

export const useEncounter = (allowNull = false)=>{
    const encounter = useContext(EncounterContext);
    if (encounter == null && !allowNull){
        throw new Error("No encounter found.")
    }
    return encounter;
}