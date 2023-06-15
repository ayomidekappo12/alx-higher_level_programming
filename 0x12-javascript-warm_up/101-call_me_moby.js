#!/usr/bin/node
const callMeMoby = function (number, thefunction) {
  for (let i = 0; i < number; i++) {
    thefunction();
  }
};

module.exports = {
  callMeMoby
};
