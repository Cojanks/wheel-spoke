const fs = require("fs-extra");

var boilerPath = 'CLI/boilerplate';
var clientsDirPath = 'clients/';

exports.cloneBoiler = (companyName) => {
    var compName = spinalCase(companyName);
    console.log("./dirCloning/dirCloning.js cloneBoiler()");
    console.log("Company name: " + compName);

    fs.mkdirs(clientsDirPath + compName)
        .then(() => {
            fs.copy(boilerPath, clientsDirPath + compName)
                .then(() => console.log('Copying success!'))
                .catch(err => console.error(err))
        })
        .catch(err => {
            console.error(err)
        })


}

function spinalCase(str) {
    return str.replace(/^[\W_]+|[\W_]+$|([\W_]+)/g, function ($0, $1) {
            return $1 ? "-" : "";
        }).replace(/([a-z])(?=[A-Z])/g, '$1-').toLowerCase();
  }
