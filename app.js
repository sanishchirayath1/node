const { reverse } = require("dns");

require("dotenv").config();

console.log("you are doing great");
console.log("User Id:", process.env.USER_ID);
console.log("User Key:", process.env.USER_KEY);

// I am learning how to implemet method chaining
function magicString(string) {
  this.string = string;
}

magicString.prototype = {
  length: function () {
    return this.string.length;
  },

  reverse: function () {
    this.string =  this.string.split("").reverse().join("");
    return this;
  },

  upperCase: function () {
    this.string =  this.string.toUpperCase();
    return this;
  },

  lowerCase: function () {
    this.string =  this.string.toLowerCase();
    return this;
  },

  camelCase: function () {
    this.string =  this.string
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
    return this;
  },

};

const magic = new magicString("I am learning how to implement method chaining");

/* Usage */
console.log('Length: ',magic.length());
console.log('Reversed string', magic.reverse());
console.log("Uppercased string", magic.upperCase());
console.log("Lowercased string", magic.lowerCase());
console.log("Camelcased string", magic.camelCase());
console.log("chained methods output", magic.camelCase().lowerCase().reverse().upperCase());
