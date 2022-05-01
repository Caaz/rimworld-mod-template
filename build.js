const fs = require('fs')
const pug = require('pug')
var data = require('./metadata.json')
data.pretty = true
function basicError(err) {
    if (err) console.error(err)
}

fs.readdir('Pug', (err, files) => {
    files.forEach(file => {
        if(file.endsWith(".pug")) {
            let name = file.substring(0, file.indexOf("."))
            let xmlName = name + "/" + name + ".xml"
            if(name == "csproj")
                xmlName = data.assemblyName + ".csproj"
            console.log("Rendering " + name)
            let rendered = pug.renderFile("Pug/" + file, data, pretty=true)
            fs.mkdir(name, (err) => {})
            fs.writeFile(xmlName, rendered, basicError)
        }
    });
});