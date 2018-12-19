/**
 * @file: app.js
 * Generated using `express-generator`
 */

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");

// Set up our application
var app = express();

// Application configuration
// Note: Most of this isn't utilised our simple example

// Setup our view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
// Enable the http request logger
app.use(logger("dev"));
// Enable json responses
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Enable cookie parser
app.use(cookieParser());
// Set up a static directory
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS for our simple example (technically it's cross-domain over different ports)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Set up our routers, most notably the products router
app.use("/", indexRouter);
app.use("/products", productsRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Export our app
module.exports = app;
