const mongoose=require("mongoose")
const MoviesSchema=mongoose.Schema(
    {"id":Number,"Movie_Name":String,"Gener":String,"Rating":Number,"Year":String}
)
const MoviesReviews=mongoose.model("MoviesReviews",MoviesSchema)
console.log(MoviesReviews)
module.exports=MoviesReviews