#! /usr/bin/env node
//allows us to run our code globally and from the command line



//fs is short for file system
//its the part of node we're bringing in to 
//help us easily read what directory we're in
const fs = require('fs')

//"__dirname " is our current directory
//readFile gives us the contents of that file
//we're passing in 3 arguments(params)
    //the file we wanna read '/info.json'
    //the way to encode that file 'utf8'
    //a callback function ' function(err, data)'

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        return data
    }
})