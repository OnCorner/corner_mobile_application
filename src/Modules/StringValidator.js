module.exports = {
  isInteger: function (value) {
    var intString = value.toString();
    for (var i = 0; i < intString.length; i++) {
      if (isNaN(intString[i])) {
        return false;
      }
    }
    return true;
  },
  isDecimal: function (value) {
    var decimalString = value.toString();
    if (decimalString.length == 0) return;

    var re = /^\d*\.?\d*$/;
    return re.test(decimalString);
  },
  isDollars: function(price) {
    price = price.toString();
    if (price.length == 0) return;

    var re = /^\$?(\d*(\.\d{0,2})?)$/;
    return re.test(price);
  },
  isEmail: function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  isFutureDate: function (idate) {
    var today = new Date().getTime(),
    idate = idate.split("/");

    idate = new Date(idate[2], idate[1], idate[0]).getTime();
    return (today - idate) < 0 ? true : false;
  },
  isIntegerFromCharCode: function(charCode) {
    if(charCode >= 48 && charCode <= 57) {
      return true;
    }
    return false;
  },
  isDecimalFromCharCode: function(charCode) {
    if(charCode >= 48 && charCode <= 57 || charCode == 46) {
      return true;
    }
    return false;
  }
};

// Validator tests
//console.log('10', Validator.isInteger(" 0 "));
//console.log('aaa', Validator.isInteger(" aaa "));
//console.log('111.2', Validator.isInteger("111.2"));
//console.log('0', Validator.isInteger("0"));
//console.log('4111111111111111111111111', Validator.isInteger("4111111111111111111111111"));
//console.log('4111111111111111111111111.', Validator.isInteger("4111111111111111111111111."));

//console.log("conner@frey.con", Validator.isEmail("conner@frey.con"));
//console.log("conner@frey", Validator.isEmail("conner@frey"));
//console.log("conner", Validator.isEmail("conner"));
//console.log("a", Validator.isEmail("a"));

//console.log("1/1/2016", Validator.isFutureDate("1/1/2016"));
//console.log("1/2/2016", Validator.isFutureDate("1/2/2016"));
//console.log("1/3/2016", Validator.isFutureDate("1/3/2016"));
//console.log("1/1/2015", Validator.isFutureDate("1/1/2015"));
//console.log("1/1/2017", Validator.isFutureDate("1/1/2017"));
//console.log("1/3/2015", Validator.isFutureDate("1/3/2015"));

// console.log("$83.22", Validator.isDollars("$83.22"));
