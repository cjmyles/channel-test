var express = require("express");
var router = express.Router();

var products = [
  { id: 1, name: "Risk Certification Training" },
  { id: 2, name: "Standards & Legislation" },
  { id: 3, name: "Assurance Audit" },
  { id: 4, name: "Property Decision Making" }
];

/* POST product. */
router.post("/", function(req, res, next) {
  products.push(req.body);
  res.send(products);
});

/* GET products listing. */
router.get("/", function(req, res, next) {
  res.send(products);
});

module.exports = router;
