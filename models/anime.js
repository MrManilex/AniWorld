import mongoose from 'mongoose'
const Schema = mongoose.Schema

const animeSchema = new Schema({
  title: {type: String, required: true},
  anilist_id: Number,
  cover_image: String,
  // collectedBy: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  // reviews: [{type: Schema.Types.ObjectId, ref: 'AnimeReview'}]
})

const Anime = mongoose.model('Anime', animeSchema)

export {
  Anime
}