import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { baseUrl, headers } from "../Globals";
import { useNavigate } from "react-router-dom";


const ReviewsContext = createContext(null);

const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    // const [updateReviews, setUpdateReviews] = useState([]);
   

    const navigate = useNavigate();

    
    useEffect(() => {
        fetch(baseUrl + '/reviews')
            .then(resp => resp.json())
            .then(reviews => setReviews(reviews))
    }, [])
    

    const addReview = (review) => {
        fetch(baseUrl + '/reviews', {
            method: "POST",
            headers,
            body: JSON.stringify(review)
        })
            .then(resp => resp.json())
            .then(review => {
                setReviews([...reviews, review])
                navigate('/reviews')
            })
        }
    

    // const updateReview = (review) => {
    //     fetch(baseUrl + './reviews/:id/', {
    //     method: "PATCH",
    //     headers,
    //     body: JSON.stringify(review) 
    // })
    //     .then((resp) => resp.json())
    //     .then(review => setReviews([...reviews, review]))
    // }

    const removeReview = comment => {
        const copyOfReviews = [...reviews];
        const review = copyOfReviews.find(review => review.gangster_films.find)
        (c => c.id == gangster_film.id)
        const reviewIndex = reviews.indexOf(review);
        const updatedReview = {...review, comment: review.gangster_films.filter
        (c => c.id !== gangster_film.id)}

        copyOfReviews.splice(reviewIndex, 1, updatedReview)
        setReviews(copyOfReviews);
    }

    


    return <ReviewsContext.Provider value={{ reviews, addReview }}>{children}</ReviewsContext.Provider>
}

export { ReviewsContext, ReviewsProvider }
