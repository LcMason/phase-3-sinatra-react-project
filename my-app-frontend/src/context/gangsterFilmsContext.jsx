import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { baseUrl, headers} from "../Globals";
// import { useNavigate } from "react-router-dom";

const GangsterFilmsContext = createContext(null);

const GangsterFilmsProvider = ({ children }) => {
    const [gangsterFilms, setGangsterFilms] = useState([]);
 
    useEffect(() => {
        fetch(baseUrl + '/gangster_films')
            .then(resp => resp.json())
            .then(gangsterFilms => setGangsterFilms(gangsterFilms))
    }, [])

    const addGangsterFilm = gangsterFilm => {
        fetch(baseUrl + '/gangster_films', {
            method: "POST",
            headers,
            body: JSON.stringify(gangsterFilm)
        })
        .then(resp => resp.json())
        .then(gangsterFilm => {
            setGangsterFilms([...gangsterFilms, gangsterFilm])
        })

    }


    return <GangsterFilmsContext.Provider value={{ gangsterFilms, addGangsterFilm }}>{children} </GangsterFilmsContext.Provider>
}

export { GangsterFilmsContext, GangsterFilmsProvider }