const fs = require("fs-extra");

var boilerPath = 'CLI/boilerplate';

exports.cloneBoiler = (companyName) => {
    console.log("./dirCloning/dirCloning.js cloneBoiler()");
    console.log("Company name: " + spinalCase(companyName));

    fs.copy(boilerPath, '../clients/' + companyName)
        .then(() => console.log('success!'))
        .catch(err => console.error(err))

}

function spinalCase(str) {
    return str.replace(/^[\W_]+|[\W_]+$|([\W_]+)/g, function ($0, $1) {
            return $1 ? "-" : "";
        }).replace(/([a-z])(?=[A-Z])/g, '$1-').toLowerCase();
  }
