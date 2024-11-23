const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const MovieReviews=require("./models/movieModel")

const app=express()
app.use(express.json())
app.use(cors())
//connect db using a existing db name or it will create a new db
mongoose.connect("mongodb://localhost:27017/MoviesDB",
    {
    useNewUrlParser: true
    }
).then(()=>{console.log("Mongo DB Connection Successful")})
.catch((err)=>{{console.log("Mongo DB Connection Unsuccessful")}})


app.route("/movies").
get((req,res)=>{
    MovieReviews.find().then((reviews)=>
        {
            res.status(200).json(reviews)
        }).catch((err)=>{
            res.status(404).send("An Error Occured")
        })   
})
.post((req,res)=>
{
    if(req.body)
    {
    const newReview= new MovieReviews(req.body)//new object created
    newReview.save()//object -> document
    .then(()=>
        {
            res.send("saved successfully")
        }).catch((err)=>{
            res.status(404).send("An Error Occured")
        })   
    }
    else
    {
        res.send("Please provide movie review")
    }
})

app.route("/movies/:id")
.delete((req,res)=>
    {
    const reviewid=req.params.id
    MovieReviews.findOneAndDelete({id: {$eq:reviewid} }).then(()=>
        {
            res.status(200).send("Successfully deleted")
        }).catch((err)=>{
            res.status(404).send("An Error Occured")
            console.log(err)
        })   
    })
.put((req,res)=>
    {
        const reviewid=req.params.id
        const updatedReview= req.body
        MovieReviews.findOne({id: {$eq:reviewid}}).then((review)=>
        {
        MovieReviews.findByIdAndUpdate(review._id,updatedReview,{new:true}).then(()=>
            {
                res.status(200).send("Successfully Updated")
            }).catch((err)=>{
                res.status(404).send("An Error Occured")
                console.log(err)
            }) 
        })     
        })


app.listen(3000,()=>{
    console.log("Server is running");
})