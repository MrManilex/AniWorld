import { Router } from "express"
import * as animeCtrl from '../controllers/animes.js'

const router = Router()

// localhost999/anime/search
router.get('/search', animeCtrl.index)


export{
  router
}
