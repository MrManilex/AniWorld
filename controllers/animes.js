import axios from 'axios'
import { Anime } from '../models/anime.js'


function index(req, res){
  axios.get(`https://api.aniapi.com/v1/anime?title=${req.body.search}&nsfw=false`,{
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

export{
  index
}