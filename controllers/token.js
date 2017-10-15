var tokenGenerator = function(Doc){
  var isToken = false,
  val = Math.random().toString(36).substring(7);

// check if token exist in database
  Doc.findOne({token: val}, 'content', function(err, doc) {
        if (err) throw(err);
        if (doc != null) {
          tokenGenerator();
        }

    });

  return val;
  }

  module.exports = tokenGenerator;
