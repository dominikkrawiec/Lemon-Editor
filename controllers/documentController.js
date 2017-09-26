
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extenden: false});

// Connect to the database
mongoose.connect('mongodb://editor:editor@ds147964.mlab.com:47964/editor', { useMongoClient: true });

var editorSchema = new mongoose.Schema({
  token: String,
  content: String,
  lead: String,
  title: String
});

var Doc = mongoose.model('editor', editorSchema);

module.exports = function(app) {
  app.get('/', function(req,res){
    res.render('editor', {});
  });


  app.post("/save", urlencodedParser, function(req,res){
      var data = req.body;

      var doc = new Doc({
        token: 'gdfgfdgd',
        content: data.content,
        lead: data.lead,
        title: data.title
      });

      doc.save();

  });
}
