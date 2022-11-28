import { useEffect, useState, createContext } from "react";
import { baseUrl, headers } from "../Globals";
import { useNavigate, useParams } from "react-router-dom";

const ReviewsContext = createContext(null);

const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
   
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        fetch(baseUrl + '/reviews')
            .then(resp => resp.json())
            .then(reviews => setReviews(reviews))
    }, [])
    
    const addReview = review => {
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

    const updateReview = review => {
        const copyOfReviews = [...reviews];
        const r = reviews.find(r => r.id === review.id);
        const rIndex = reviews.indexOf(r);
        copyOfReviews.splice(rIndex, 1, review);
        setReviews(copyOfReviews);

    }

    const editReview = review => {
        return fetch(baseUrl + '/reviews/' + review.id, {
        method: "PATCH",
        headers,
        body: JSON.stringify(review), 
    })
        .then((resp) => resp.json())
        .then(data => {
            updateReview(data);
            navigate('/reviews')
            return data
        })
      
    }

    const removeReview = review => {
        setReviews(reviews.filter(r => r.id !== review.id))
    }


    return <ReviewsContext.Provider value={{ reviews, id, addReview, editReview, removeReview }}>{children}</ReviewsContext.Provider>
}

export { ReviewsContext, ReviewsProvider }
