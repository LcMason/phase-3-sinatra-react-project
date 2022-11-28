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

    // const editGangsterFilmReview = review => {
    //     const copyOfGangsterFilms = [...gangsterFilms]
    //     const gangsterFilm = copyOfGangsterFilms.find(gangsterFilm => gangsterFilm.review.find
    //     (r => r.id == review.id))

    //     if(gangsterFilm.id !== gangsterFilm.review.id) {
    //         const updatedGangsterFilm = {...gangsterFilm, reviews: gangsterFilm.reviews.filter
    //         (r => r.id !== review.id)}

    //     }

    //     const gangsterFilmIndex = gangsterFilm.indexOf(gangsterFilm);
        // const updatedGangsterFilm = {...gangsterFilm, reviews: gangsterFilm.reviews.filter
        // (r => r.id !== review.id)}
    // }
    // not removing any films so line 31-33 may not be needed
    // const removeReview = review => {
    //     setReviews(review.filter(r => r.id !== review.id))
    // } 



    return <GangsterFilmsContext.Provider value={{ gangsterFilms, addGangsterFilm }}>{children} </GangsterFilmsContext.Provider>
}

export { GangsterFilmsContext, GangsterFilmsProvider }