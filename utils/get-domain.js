module.exports = () => {
  process.env.APP_DOMAIN || `${process.env.HEROKU_APP_NAME}.herokuapp.com`;
}
