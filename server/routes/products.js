var express = require("express");
var router = express.Router();

var products = [
  { id: "1", name: "Risk Certification Training" },
  { id: "2", name: "Standards & Legislation" },
  { id: "3", name: "Assurance Audit" },
  { id: "4", name: "Property Decision Making" }
];

/* Create (POST) product. */
router.post("/", (req, res, next) => {
  products.push(req.body);
  res.send(products);
});

/* Read (GET) products. */
router.get("/", (req, res, next) => {
  res.send(products);
});

/* Update (PUT) product. */
router.put("/:id", (req, res, next) => {
  products = products.map(product =>
    product.id === req.params.id ? req.body : product
  );
  res.send(products);
});

/* Delete (DELETE) product. */
router.delete("/:id", (req, res, next) => {
  products = products.filter(product => product.id !== req.params.id);
  res.send(products);
});

module.exports = router;
