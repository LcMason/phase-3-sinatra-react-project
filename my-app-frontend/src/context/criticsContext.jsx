import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { baseUrl, headers} from "../Globals";
import { useNavigate } from "react-router-dom";

const CriticsContext = createContext(null);

const CriticsProvider = ({ children }) => {
    const [critics, setCritics] = useState([]);

    const navigate = useNavigate

    useEffect(() => {
        fetch(baseUrl + '/critics')
            .then(resp => resp.json())
            .then(critics => setCritics(critics))
    }, [])

    const addCritic = (critic) => {
        fetch(baseUrl + '/critics', {
            method: "POST",
            headers,
            body: JSON.stringify(critic)
        })
            .then(resp => resp.json())
            .then(critics => {
                setCritics([...critics, critic])
                navigate('/critics')
            })
        }

    return <CriticsContext.Provider value={{ critics, addCritic }}>{children} </CriticsContext.Provider>
}

export { CriticsContext, CriticsProvider }