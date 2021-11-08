import { Router } from "express"
import * as animeCtrl from '../controllers/animes.js'

const router = Router()

// localhost999/anime/results
router.post('/results', animeCtrl.search)


export{
  router
}
