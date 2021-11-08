import { Router } from "express"
import * as animeCtrl from '../controllers/animes.js'

const router = Router()

// localhost999/anime/results
router.post('/results', animeCtrl.search)

// localhost999/anime/id <<<AniAPI (ANILIST) ID
router.get('/:id', animeCtrl.show)

export{
  router
}
