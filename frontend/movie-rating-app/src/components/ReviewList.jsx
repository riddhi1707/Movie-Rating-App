import { useState,useEffect } from "react";
import axios from 'axios'
function ReviewList()
{
    const [reviews,setReviews]=useState([])
    const fetchReviews=()=>
    {
        axios.get("http://localhost:3000/movies")
        .then((reviews)=>{
            //reviews is a object
            //we have to use review.data
            setReviews(reviews.data)
            console.log(reviews.data)
                         })
        .catch((err)=>{
            console.log(err)
                        })
    }
    const deleteReview=(id)=>
        {
            if(window.confirm("Are you sure to delete"))
            {
            axios.delete(`http://localhost:3000/movies/${id}`)
            .then(()=>{
                fetchReviews()
                alert("Deleted")
                      })
            .catch((err)=>{
                console.log(err)
                          })
            }
        }
    useEffect(()=>{fetchReviews()},[])
    
    return(
        <>
        <h1> The following are the reviews</h1>
        <table className="table table-bordered">
            <thead>
            <tr><th>ID</th><th>Movie Name</th><th>Genre</th><th>Rating</th><th>Year</th><th colSpan={2}>Action</th></tr>
            </thead>
            <tbody>
            {reviews.map((review)=>(
                <tr><td>{review.id}</td><td>{review.moviename}</td><td>{review.genre}</td><td>{review.rating}</td><td>{review.year}</td>
                <td><button onClick={()=>deleteReview(review.id)} className="btn btn-warning">Delete</button></td><td><a className="btn btn-secondry" href="/edit/{review.id}"></a></td></tr>
            ))}
            </tbody>
        </table>
        </>
    )
}

export default ReviewList;