import mongoose from 'mongoose'
const Schema = mongoose.Schema

const animeSchema = new Schema({

})

const Anime = mongoose.models('Anime', animeSchema)

export {
  Anime
}