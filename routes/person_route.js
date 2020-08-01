var person = require("../model/person_model");
var express = require("express");
var router = express.Router();

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        person.getPersonById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }    
        });
    }
    else{
   person.getAllPerson(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
   });
}
});

router.post("/", function(req, res, next) {
  person.addPerson(req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id", function(req, res, next) {
  person.updatePerson(req.params.id,req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
