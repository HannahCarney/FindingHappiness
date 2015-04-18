var path = require('path');

function routes(app, db) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "/index.html"));
  });

  app.post("/sentence", function(req, res) {
    var sentence = db.add(req.body.sentence);
    res.status(200).send({sentence: sentence});
  });

  app.get("/sentence", function(req, res) {
    res.send({result: db.getResult()});
  });

}

module.exports = routes;