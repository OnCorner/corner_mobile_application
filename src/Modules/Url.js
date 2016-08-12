module.exports = {
  isRoot() {
    var currentLocation = window.location.pathname;
    return currentLocation == "/";
  },
  cornerProd: "https://corner-prod.herokuapp.com",
  localhost: "https://localhost:1337",
};
