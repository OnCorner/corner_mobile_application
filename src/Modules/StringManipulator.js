module.exports = {
  stripLetters: function(value) {
    return value.replace(/[^\d.]/g, '');
  },
  capitalizeFirstLetter: function(string) {
    if(string.length <= 2) {
      return "";
    }
    if(string == null) {
      return "";
    }
    if(string == undefined) {
      return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  },
  getMonthStringFromIndex: function(monthIndex) {
    monthIndex++;
    var monthIndexString = monthIndex.toString();
    if(monthIndexString.length == 1) {
      monthIndexString = '0' + monthIndexString;
    }
    return monthIndexString;
  },
  formatPhone2: function(phone) {
    if(!phone) {
      return;
    }
    var m = phone.match(/(\d)(\d{0,3})?(\d{0,3})?(\d{0,4})?/);
    if(!m || !m[1]) {
      return "";
    }
    if(!m[2]) {
      return `${m[1]}`;
    }
    if(!m[3]) {
      return `${m[1]} (${m[2]}`;

    }
    if(!m[4]) {
      return `${m[1]} (${m[2]}) ${m[3]}`;
    }

    return `${m[1]} (${m[2]}) ${m[3]} - ${m[4]}`;
  },
  formatPhone: function(phone) {
    if(phone == null || phone == undefined) {
      return "+1 ";
    }
    var m = phone.match(/(\d{0,3})(\d{0,3})?(\d{0,4})?/);
    if(!m || !m[1]) {
      return "+1 ";
    }
    if(!m[2]) {
      return `+1 (${m[1]}`;
    }
    if(!m[3]) {
      return `+1 (${m[1]}) ${m[2]}`;
    }
    return `+1 (${m[1]}) ${m[2]} - ${m[3]}`;
  },
  stripPhoneCharacters: function(value) {
    value = value.replace("+1 ", '');
    value = value.replace(/[\(\)-\s]/g,'');
    if(value.length == 12) {
      value = value.slice(0, -1);
    }

    return value;
  }
};
