import { Review } from "../models/animeReview.js"
import { Anime } from '../models/anime.js'
import { Profile } from "../models/profile.js"

function create(req, res){
  req.body.author = req.user.profile._id
  req.params.id = parseInt(req.params.id)
  req.body.anime = req.params.id
  Review.create(req.body)
  .then(review => {
    Anime.findOne({animeId: req.params.id})
    .then(anime => {
      Profile.findById(req.user.profile._id)
      .then(profile => {
        anime.reviews.push(review._id)
        profile.reviews.push(review._id)
        anime.save()
        profile.save()
        .then(() => {
          res.redirect(`/anime/${anime.animeId}`)
        })
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export{
  create
}