const fs = require('fs')
const pug = require('pug')
const data = require('./package.json')

function basicError(err) {
    if (err) console.error(err)
}

fs.readdir('Pug', (err, files) => {
    files.forEach(file => {
        if(file.endsWith(".pug")) {
            let name = file.substring(0,file.indexOf("."))
            let xmlName = name + "/" + name + ".xml"
            console.log("Rendering " + name)
            let rendered = pug.renderFile('Pug/Defs.pug', data)
            fs.mkdir(name, (err) => {})
            fs.writeFile(xmlName, rendered, basicError)
        }
    });
});