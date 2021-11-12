import { Profile } from "../models/profile.js";

function show(req, res){
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profile/show', {
      profile
    })
  })
}

export{
  show
}