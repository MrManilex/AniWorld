import { Router } from "express";
const router = Router()

router.get('/:id',isLoggedIn, reviewsCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export{
  router
}