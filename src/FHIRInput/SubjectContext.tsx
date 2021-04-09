import React, { useContext } from "react"
import { Patient } from "./models";

export const SubjectContext = React.createContext<Patient | null>(null) 

export const useSubject = ():Patient=>{
    const patient = useContext<Patient | null>(SubjectContext)
    if (!patient){
        throw new Error("No Subject set.")
    }
    return patient
}