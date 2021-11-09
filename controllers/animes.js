import { Anime } from '../models/anime.js'
import axios from 'axios'


function search(req, res){
  const massagedSearch = req.body.search.split(' ').join('%20')
  axios.get(`https://api.aniapi.com/v1/anime?title=${massagedSearch}`,{
    headers: {
      'Authorization': `Bearer ${process.env.JWT}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response => {
    res.render('animes/results', {
      title: 'Anime | Results',
      results: response.data.data.documents
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res){
  axios.get(`https://api.aniapi.com/v1/anime/${req.params.id}`,{
    headers: {
      'Authorization': `Bearer ${process.env.JWT}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(response => {
      Anime.findOne({ animeId: response.data.data.id})
      .populate('collectedBy')
      .then(anime => {
        res.render('animes/show', {
          title: 'Anime | Details',
          anime,
          results: response.data.data,
          userAnimes: anime?.collectedBy.somg(profile => profile._id.equals(req.user.profile._id))
        })
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

export{
  search,
  show
}