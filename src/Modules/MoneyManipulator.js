var MoneyManipulator = module.exports = {
  formatPrice: function(price) {
    return "$" + MoneyModule.formatPriceNoDollarSign(price);
  },
  formatPriceNoDollarSign: function(price) {
    if(price == undefined) {
      return "";
    }

    if(isNaN(price)) { // TODO: this might be good??
      return "";
    }

    if(price.length == 0) {
      return "";
    }

    price = parseFloat(price / 100).toFixed(2);
    price = price.toString();

    return price;
  },
  padWithZeroes: function(price) {
    function padFront(front) {
      if(!front || front.length == 0) {
        return `0`;
      }
      return front;
    }

    function padBack(back) {
      if(!back || back.length == 0) {
        return `00`;
      }
      if(back.length == 1) {
        return `${back}0`;
      }
      return back;
    }
    price += "";
    var arr = price.split(".");
    return `${padFront(arr[0])}.${padBack(arr[1])}`;
  }
};
