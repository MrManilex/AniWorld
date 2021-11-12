import { Profile } from "../models/profile.js";
import { Review } from '../models/animeReview.js'
import { Anime } from '../models/anime.js'

function show(req, res){
  Profile.findById(req.params.id)
  .then(profile => {
    Review.find({ author: profile._id })
    .then(reviews => {
      Anime.find({ collectedBy: profile._id})
      .then(animes => {
        res.render('profile/show', {
          title: 'Test',
          profile,
          reviews,
          animes
        })
      })
    })
  })
}

export{
  show
}