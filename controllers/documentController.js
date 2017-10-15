
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extenden: false});
var newToken = require('./token.js');

// Connect to the database
mongoose.connect('mongodb://editor:editor@ds147964.mlab.com:47964/editor', { useMongoClient: true });

var editorSchema = new mongoose.Schema({
  token: String,
  content: String,
  lead: String,
  title: String
});

var Doc = mongoose.model('editor', editorSchema);
var currentToken = {
  id : ''
};

module.exports = function(app) {
  app.get('/', function(req,res){
    res.render('editor', {});
  });

  app.get('/:token', function(req, res){
    console.log(req.params.token);
    var found = Doc.findOne({'token' : req.params.token}, 'content lead title', function(err, cont){
      if(err) throw(err);

      if(cont != null) {
        currentToken.id = req.params.token;

        res.render('shared', {
              url: 'localhost:3000/' + req.params.token,
              title: cont.title,
              lead: cont.lead,
              content: cont.content
            });
      } else {
        res.render('editor', {});
      }
    });

    return currentToken.id;
  });

  app.post("/save", urlencodedParser, function(req,res){
      var data = req.body;

      if(data.docid != 'null'){
        Doc.findOne({'token' : data.docid.substring(1)}, function(err, doc){
          if (err) throw(err);

          doc.set({
            token: data.docid.substr(1),
            content: data.content,
            lead: data.lead,
            title: data.title });

          doc.save(function (err, updatedDoc) {
            if (err) throw(err);

          });

          token = data.docid.substr(1);
          res.send({
            redirect : '/' + token
          })
        })
      } else {
      token = newToken(Doc);
      var doc = new Doc({
          token: token,
          content: data.content,
          lead: data.lead,
          title: data.title
        });

        doc.save(function (err, updatedDoc) {
          if (err) throw(err);
          res.send({
        redirect : '/' + token
          })
        });
      }
  });

  return currentToken.id;
}
