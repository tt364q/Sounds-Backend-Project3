const Producer = require ('../models/producers');


function index(req, res){
    Producer.find({}, function(err, producers){
        res.render('producers/index', { producers })
    });
}

function create(req, res){
    Producer.create(req.body, function(err, producer){
        res.redirect('/producers')
    });
}
function update(req, res){
    Producer.findByIdAndUpdate(req.params.id, req.body, function(err, producer){
        if (err) {
         console.log(err);
        } else {
          res.redirect('/producers');
        }
     })
}

function remove(req, res){
    Producer.findByIdAndRemove(req.params.id, function(err, producer){
        if (err) {
         console.log(err);
        } else {
          res.redirect('/producers');
        }
     })
}
module.exports = {
    create,
    index,
    update,
    remove
}