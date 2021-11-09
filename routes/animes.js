import { Router } from "express"
import * as animeCtrl from '../controllers/animes.js'

const router = Router()

// localhost999/anime/results
router.post('/results', isLoggedIn, animeCtrl.search)

// localhost999/anime/id <<<AniAPI (ANILIST) ID
router.get('/:id', isLoggedIn, animeCtrl.show)

router.patch('/:id/addToList', isLoggedIn, animeCtrl.addToList)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export{
  router
}
