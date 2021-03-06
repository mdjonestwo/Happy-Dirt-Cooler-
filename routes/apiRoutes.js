const db = require("../models");

module.exports = (app) => {
  //GET ROUTE
  app.get("/api/cooler", (req, res) => {
    db.Pallet.find({})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //POST ROUTE
  app.post("/api/cooler", (req, res) => {
    db.Pallet.create(req.body)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // //PUT ROUTE
  // app.put("/api/cooler/:id", (req, res) => {
  //   db.Pallet.findByIdAndUpdate(req.params.id,
  //     { $set: { is_complete: false } },).then((response) => {
  //     res.json(response);
  //   });
  // });
};
