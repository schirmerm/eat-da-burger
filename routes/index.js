module.exports = app => {
  require('./burgerRoutes.js/index.js')(app)
  require('./viewRoutes.js')(app)
}