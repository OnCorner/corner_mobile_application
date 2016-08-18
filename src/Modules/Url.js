module.exports = {
  isRoot() {
    var currentLocation = window.location.pathname;
    return currentLocation == "/";
  },
  cornerProd: "https://corner-prod.herokuapp.com",
  localhost: "http://localhost:1337",
};
