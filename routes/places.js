var express = require('express');
var router = express.Router();
const Place = require('../models/places');

// Get /places - récupérer tous les marqueurs en base de donnée

router.get('/all', function(req, res) {
    Place.find().then(docs => {
        res.json({ result: true, docs });
    });
});

// Post /places - ajout nouveau marqueur en base de donnée 

router.post('/', function(req, res) {
    const newPlace = new Place({
        nickname: req.body.nickname,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,

});

newPlace.save().then(newDoc => {
    res.json({ result: true, newDoc });
});
});

// Get /places/:nickname - récupérer tout les marqueurs en base de donnée en fonction d'un utilisateur

router.get('/:nickname', function(req, res) {
    Place.find({ nickname: req.params.nickname }).then(places => {
        res.json({ result: true, places });
    });
});

// Delete /places - supprimer un marqueur en base de donnée à paertir du nom de la place et du nickname de l'utilisateur

router.delete('/', function(req, res) {
    Place.deleteOne({ name: req.body.name, nickname: req.body.nickname }).then(() => {
        res.json({ result: true });
    });
});
    


module.exports = router;
