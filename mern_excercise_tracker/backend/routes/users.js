const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) =>{
    // find users with mongoose method
    User.find()
    //return all users in json response
    .then(users => res.json(users))
    //error handeling
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    
    //create username variable
    const username = req.body.username;
    //create new instace of user
    const newUser = new User({username});
    //save user to db with built in mongoose function 
    newUser.save()
    .then(() => res.json(`${newUser.username} You have been added!`))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;