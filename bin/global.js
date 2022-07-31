#!/usr/bin/env node

const fs = require("fs-extra")
const ejs = require("ejs")
const argv = require("yargs-parser")(process.argv.slice(2))
const path = require("path")
const emoji = require('node-emoji')

const main = () => {
  try {
    // el como se llamara nuestro archivo
    let out;
    //la variable como se llamra nuestra funcion
    let fn;
    const { _: leftovers,help} = argv

    if(leftovers[0] === "newProyect" && leftovers[1]){
        console.log(emoji.get('beer'), "Generating template...");
        const options = {}
        let filename;
        
        //file inicials
        console.log(emoji.get('heavy_check_mark'), "Create file inicial");
        filename = path.join(__dirname, "../templates/fileInitial/npmignore.ejs")
        out = `/${leftovers[1]}/.npmignore`;
        renderFileCode(filename,{},options,out);
        
        filename = path.join(__dirname, "../templates/fileInitial/package.ejs")
        out = `/${leftovers[1]}/package.json`;
        renderFileCode(filename,{},options,out);
        
        filename = path.join(__dirname, "../templates/fileInitial/tsconfig.ejs")
        out = `/${leftovers[1]}/tsconfig.json`;
        renderFileCode(filename,{},options,out);
        
        filename = path.join(__dirname, "../templates/fileInitial/tsconfig.paths.ejs")
        out = `/${leftovers[1]}/tsconfig.paths.json`;
        renderFileCode(filename,{},options,out);

        filename = path.join(__dirname, "../templates/fileInitial/serverless.ejs")
        out = `/${leftovers[1]}/serverless.yml`;
        renderFileCode(filename,{},options,out);

        filename = path.join(__dirname, "../templates/fileInitial/README.ejs")
        out = `/${leftovers[1]}/README.md`;
        renderFileCode(filename,{},options,out);


        //file for proyect hello
        //--infraestructure
        console.log(emoji.get('heavy_check_mark'), "Create files for infraestructure");
        filename = path.join(__dirname, "../templates/infraestructure/handlers/hello.ejs")
        out = `/${leftovers[1]}/src/infraestructure/handlers/hello-handler.ts`;
        renderFileCode(filename,{},options,out);

        filename = path.join(__dirname, "../templates/infraestructure/handlers/README.ejs")
        out = `/${leftovers[1]}/src/infraestructure/helpers/README.md`;
        renderFileCode(filename,{},options,out);

        filename = path.join(__dirname, "../templates/infraestructure/helpers/README.ejs")
        out = `/${leftovers[1]}/src/infraestructure/helpers/README.md`;
        renderFileCode(filename,{},options,out);

        filename = path.join(__dirname, "../templates/infraestructure/helpers/response.ejs")
        out = "/app/src/infraestructure/helpers/response.ts";
        renderFileCode(filename,{},options,out);

        //--application
        console.log(emoji.get('heavy_check_mark'), "Create files for applications");
        filename = path.join(__dirname, "../templates/application/controllers/helloController.ejs")
        out = `/${leftovers[1]}/src/application/controllers/helloController.ts`;
        renderFileCode(filename,{},options,out);

        filename = path.join(__dirname, "../templates/application/exceptions/README.ejs")
        out = `/${leftovers[1]}/src/application/exceptions/README.md`;
        renderFileCode(filename,{},options,out);

        filename = path.join(__dirname, "../templates/application/helpers/responses.ejs")
        out = `/${leftovers[1]}/src/application/helpers/responses.ts`;
        renderFileCode(filename,{},options,out);

        filename = path.join(__dirname, "../templates/application/model_adapters/README.ejs")
        out = `/${leftovers[1]}/src/application/model_adapters/README.md`;
        renderFileCode(filename,{},options,out);

        filename = path.join(__dirname, "../templates/application/exceptions/README.ejs")
        out = `/${leftovers[1]}/src/application/exceptions/README.md`;
        renderFileCode(filename,{},options,out);

        //--domain
        console.log(emoji.get('heavy_check_mark'), "Create files for domain");
        filename = path.join(__dirname, "../templates/domain/useCase/README.ejs")
        out = `/${leftovers[1]}/src/domain/useCase/README.md`;
        renderFileCode(filename,{},options,out);

        console.log(emoji.get('beer'), "task complete");

    }
    if(leftovers[0] != "g" && leftovers[0] === "generate" && leftovers[0] === "newProyect" && !help){
        console.log(emoji.get('poop'), " -> syntax error, press  amcServerless --help for more help");
    }  
    if(leftovers[0] === "g" || leftovers[0] === "generate"){

    }
    if(help){
        console.log(emoji.get('smile'), "-- Comand --");
        console.log(emoji.get('heavy_check_mark'), "amcServerless newProyect [your_name_proyect] -> [for create a new proyect]");
    }  

    /**const data = {
      fn,
      leftovers,
    }
    const options = {}
    const filename = path.join(__dirname, "../templates/main.ejs")**/

    // 7. Run the renderFile, passing the required args
    // as outlined on the package docs.
    /**ejs.renderFile(filename, data, options, function(err, str) {
      // str => Rendered HTML string
      if (err) {
        console.error(err)
      }

      // 8. Write file to --out path
      const outputFile = path.join(process.cwd(), out)
      fs.ensureFileSync(outputFile)
      fs.outputFileSync(outputFile, str)
    })***/
  } catch (err) {
    console.error(err)
  }
}

const renderFileCode= async (filename,data,options,out)=>{
    ejs.renderFile(filename, data, options, function(err, str) {
        if (err) {
            console.error(err)
        }
        const outputFile = path.join(process.cwd(), out)
        fs.ensureFileSync(outputFile)
        fs.outputFileSync(outputFile, str)
    })
}
main()
