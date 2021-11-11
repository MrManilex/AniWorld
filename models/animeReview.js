import mongoose from 'mongoose'
const Schema = mongoose.Schema

const aReviewSchema = new Schema({
  rating: {type: Number, min: 1, max: 5, required: true},
  content: String,
  anime: [{ type: Schema.Types.ObjectId, ref: 'Anime'}],
  author: [{ type: Schema.Types.ObjectId, ref: 'Profile'}]
})

const Review = mongoose.model('Review', aReviewSchema)

export{
  Review
}