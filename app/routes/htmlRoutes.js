module.exports = function(app, path) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/js/survey.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/survey.js"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
