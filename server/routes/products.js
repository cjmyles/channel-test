var express = require("express");
var router = express.Router();

/* GET products listing. */
router.get("/", function(req, res, next) {
  res.send([
    { id: 1, name: "Risk Certification Training" },
    { id: 2, name: "Standards & Legislation" },
    { id: 3, name: "Assurance Audit" },
    { id: 4, name: "Property Decision Making" }
  ]);
});

module.exports = router;
