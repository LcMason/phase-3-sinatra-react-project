import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { baseUrl, headers } from "../Globals";
import { useNavigate } from "react-router-dom";

// const ReviewsContext = createContext({});
const ReviewsContext = createContext(null);

const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);

    const navigate = useNavigate();

    
    useEffect(() => {
        fetch(baseUrl + '/reviews')
            .then(resp => resp.json())
            .then(reviews => setReviews(reviews))
    }, [])

    // const addReview = (review) => {
    //     fetch(baseUrl + '/reviews', {
    //         method: "POST",
    //         headers,
    //         body: JSON.stringify(review)
    //     })
    //         .then(resp => resp.json())
    //         .then(reviews => {
    //             setReviews([...reviews, review])
    //             navigate('/reviews')
    //         })
    

    return <ReviewsContext.Provider value={{ reviews, setReviews }}>{children}</ReviewsContext.Provider>
}

export { ReviewsContext, ReviewsProvider }

// <ReviewsProvider> </ReviewsProvider>