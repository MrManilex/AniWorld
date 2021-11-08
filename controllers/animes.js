import axios from 'axios'
import { Anime } from '../models/anime.js'


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

export{
  search
}