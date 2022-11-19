import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { baseUrl} from "../Globals";
// import { useNavigate } from "react-router-dom";

const CriticsContext = createContext(null);

const CriticsProvider = ({ children }) => {
    const [critics, setCritics] = useState([]);

    useEffect(() => {
        fetch(baseUrl + '/critics')
            .then(resp => resp.json())
            .then(critics => setCritics(critics))
    }, [])

    return <CriticsContext.Provider value={{ critics, setCritics }}>{children} </CriticsContext.Provider>
}

export { CriticsContext, CriticsProvider }