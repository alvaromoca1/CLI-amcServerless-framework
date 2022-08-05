#!/usr/bin/env node

const fs = require("fs-extra")
const ejs = require("ejs")
const argv = require("yargs-parser")(process.argv.slice(2))
const path = require("path")
const emoji = require('node-emoji')

const main = () => {
  try {
    let out;
    let fn;
    const options = {}
    const { _: leftovers,help} = argv
    if(leftovers.length < 4 && leftovers.length != 0 ){
        switch (leftovers[0]) {
            case "newProyect":
                if(leftovers[1]){
                    console.log(emoji.get('beer'), "Generating template...");
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

                    filename = path.join(__dirname, "../templates/fileInitial/gitignore.ejs")
                    out = `/${leftovers[1]}/.gitignore`;
                    renderFileCode(filename,{},options,out);

                    filename = path.join(__dirname, "../templates/fileInitial/test/hello.test.ejs")
                    out = `/${leftovers[1]}/test/hello.test.ts`;
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
                    out = `/${leftovers[1]}/src/infraestructure/helpers/response.ts`;
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
                else{
                    console.log(emoji.get('poop'), " -> need name for proyect, syntax error, press  amcServerless --help for more help.");
                }
            break;
        
            case "g":
                if(leftovers[1] && leftovers[2]){
                    switch (leftovers[1]) {
                        case "handler":
                            console.log(emoji.get('heavy_check_mark'), "Create the handler ", leftovers[2]);
                            filename = path.join(__dirname, "../templates/infraestructure/handlers/generateHandler.ejs")
                            out = `/src/infraestructure/handlers/${leftovers[2]}Handler.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);
                        break;

                        case "h":
                            console.log(emoji.get('heavy_check_mark'), "Create the handler ", leftovers[2]);
                            filename = path.join(__dirname, "../templates/infraestructure/handlers/generateHandler.ejs")
                            out = `/src/infraestructure/handlers/${leftovers[2]}Handler.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);
                        break;

                        case "controller":
                            console.log(emoji.get('heavy_check_mark'), "Create the Controller ", leftovers[2]);
                            filename = path.join(__dirname, "../templates/application/controllers/generateController.ejs")
                            out = `/src/application/controllers/${leftovers[2]}Controller.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);
                        break;

                        case "c":
                            console.log(emoji.get('heavy_check_mark'), "Create the Controller ", leftovers[2]);
                            filename = path.join(__dirname, "../templates/application/controllers/generateController.ejs")
                            out = `/src/application/controllers/${leftovers[2]}Controller.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);
                        break;

                        case "service":
                            console.log(emoji.get('heavy_check_mark'), "Create the Service or CaseUse ", leftovers[2]);
                            filename = path.join(__dirname, "../templates/domain/useCase/generateService.ejs")
                            out = `/src/domain/useCase/${leftovers[2]}UseCase.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);
                        break;

                        case "s":
                            console.log(emoji.get('heavy_check_mark'), "Create the Service or CaseUse ", leftovers[2]);
                            filename = path.join(__dirname, "../templates/domain/useCase/generateService.ejs")
                            out = `/src/domain/useCase/${leftovers[2]}UseCase.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);
                        break;

                        case "module":
                            console.log(emoji.get('heavy_check_mark'), `Create the handler ${leftovers[2]}Handler.ts`);
                            filename = path.join(__dirname, "../templates/infraestructure/handlers/mainHandler.ejs")
                            out = `/src/infraestructure/handlers/${leftovers[2]}Handler.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);

                            console.log(emoji.get('heavy_check_mark'), `Create the Controller ${leftovers[2]}Controller.ts`);
                            filename = path.join(__dirname, "../templates/application/controllers/mainController.ejs")
                            out = `/src/application/controllers/${leftovers[2]}Controller.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);

                            console.log(emoji.get('heavy_check_mark'), `Create the Service or CaseUse ${leftovers[2]}UseCase.ts`);
                            filename = path.join(__dirname, "../templates/domain/useCase/mainService.ejs")
                            out = `/src/domain/useCase/${leftovers[2]}UseCase.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);

                            console.log(emoji.get('heavy_check_mark'), `Create the test for handler ${leftovers[2]}.test.ts`);
                            filename = path.join(__dirname, "../templates/fileInitial/test/mainHello.test.ejs")
                            out = `/test/${leftovers[2]}.test.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);

                            console.log(emoji.get('warning'), `add the ${leftovers[2]}Handler.ts in the serverless.yml in the configuration`);
                        break;

                        case "m":
                            console.log(emoji.get('heavy_check_mark'), `Create the handler ${leftovers[2]}Handler.ts`);
                            filename = path.join(__dirname, "../templates/infraestructure/handlers/mainHandler.ejs")
                            out = `/src/infraestructure/handlers/${leftovers[2]}Handler.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);

                            console.log(emoji.get('heavy_check_mark'), `Create the Controller ${leftovers[2]}Controller.ts`);
                            filename = path.join(__dirname, "../templates/application/controllers/mainController.ejs")
                            out = `/src/application/controllers/${leftovers[2]}Controller.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);

                            console.log(emoji.get('heavy_check_mark'), `Create the Service or CaseUse ${leftovers[2]}UseCase.ts`);
                            filename = path.join(__dirname, "../templates/domain/useCase/mainService.ejs")
                            out = `/src/domain/useCase/${leftovers[2]}UseCase.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);

                            console.log(emoji.get('heavy_check_mark'), `Create the test for handler ${leftovers[2]}.test.ts`);
                            filename = path.join(__dirname, "../templates/fileInitial/test/mainHello.test.ejs")
                            out = `/test/${leftovers[2]}.test.ts`;
                            renderFileCode(filename,{nameFunction:leftovers[2]},options,out);
                            
                            console.log(emoji.get('warning'), `add the ${leftovers[2]}Handler.ts in the serverless.yml in the configuration`);
                        break;
                    
                        default:
                            console.log(emoji.get('poop'), " -> syntax error, press  amcServerless --help for more help.");
                        break;
                    }
                }
                else{
                    console.log(emoji.get('poop'), " -> syntax error, press  amcServerless --help for more help.");
                }
            break;

            case "generate":
            break;
            default:
                console.log(emoji.get('poop'), " -> syntax error, press  amcServerless --help for more help.");
            break;
        }
    }
    else{
        if(help){
            console.log(emoji.get('smile'), "-- Comand --");
            console.log(emoji.get('heavy_check_mark'), "amcServerless newProyect [your_name_proyect] -> for create a new proyect");

            console.log(emoji.get('heavy_check_mark'), "amcServerless g h [your_name_hamdler] -> for create a new handler");
            console.log(emoji.get('heavy_check_mark'), "amcServerless generate handler [your_name_hamdler] -> for create a new handler");

            console.log(emoji.get('heavy_check_mark'), "amcServerless g c [your_name_controller] -> for create a new controller");
            console.log(emoji.get('heavy_check_mark'), "amcServerless generate controller [your_name_controller] -> for create a new controller");

            console.log(emoji.get('heavy_check_mark'), "amcServerless g s [your_name_service] -> for create a new service or caseUse");
            console.log(emoji.get('heavy_check_mark'), "amcServerless generate service [your_name_service] -> for create a new service or caseUse");

            console.log(emoji.get('heavy_check_mark'), "amcServerless g m [your_name_module] -> for create a new service or Module");
            console.log(emoji.get('heavy_check_mark'), "amcServerless generate module [your_name_module] -> for create a new service or Module");
        }
        else{
            console.log(emoji.get('poop'), " -> syntax error, press  amcServerless --help for more help.");
        }
    }
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
