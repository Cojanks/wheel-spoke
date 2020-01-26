const fs = require("fs-extra");
const replace = require('replace-in-file');


var boilerPath = 'CLI/boilerplate';
var clientsDirPath = 'clients/';

exports.cloneBoiler = (companyName) => {
    var compName = spinalCase(companyName);

    fs.mkdirs(clientsDirPath + compName)
        .then(() => {
            fs.copy(boilerPath, clientsDirPath + compName)
                .then(() => {
                    console.log('Boilerplate cloned & new client directory created with name: ' + compName);
                    replaceClientName(compName);
                })    
                .catch(err => console.error(err))
        })
        .catch(err => console.error(err));


}

function spinalCase(str) {  
    return str.replace(/^[\W_]+|[\W_]+$|([\W_]+)/g, function ($0, $1) {
            return $1 ? "-" : "";
        }).replace(/([a-z])(?=[A-Z])/g, '$1-').toLowerCase();
  }


function replaceClientName(compName) {
    // Options for replacing stand-in values in Boilderplate
    const options = {
        files: [
            clientsDirPath + compName + '/*.js',
            clientsDirPath + compName + '/nestedDir/*'
            // All over filepaths go here
        ],
        from: /boiler-clientName/g, //Change from
        to: 'TEST-REPLACE', //Change to
        };

    replace(options)
        .then(results => {
            console.log('Replacement results:', results);
        })
        .catch(error => {
            console.error('Replacement Error occurred:', error);
        });
}
