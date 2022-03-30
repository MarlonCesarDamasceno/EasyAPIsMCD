function ValidateFile()
{
    verifyFile=document.getElementById("requisitionFile").value;
let displayTextFile=document.getElementById("displayImport");

var reader=new FileReader();
if(verifyFile=="")
{
    displayTextFile.innerHTML="<span style='color:red'>Erro! Por favor, faça importação do arquivo antes de ler o mesmo.</span>";
    setTimeout(function()
    {
        displayTextFile.innerHTML="";
    },4000);
    
}
else
{
reader.addEventListener("loadend", function() {
    
ReadingFile(reader.result);
});
reader.readAsText(document.querySelector('input[type=file]').files[0]);
}
}

function ReadingFile(file)
{
    //alert("arquivo: "+file);
let displayTextFile=document.getElementById("displayImport");

displayTextFile.innerHTML="Aguarde... Validando arquivo.";
setTimeout(function()
{
if(ValidateJson(file))
{
    displayTextFile.innerHTML="Arquivo validado com sucesso.";
    convertToJsonData=JSON.parse(file);
ValidateSchema(convertToJsonData);
}
else
{
            displayTextFile.innerHTML="<span style='color:red'>Erro. O arquivo Json não é um arquivo válido.</span>"; 
    }
},3000);
}

function ValidateSchema(convertToJson)
{
    let displayTextFile=document.getElementById("displayImport");
//alert("json convertido"+convertToJson);




displayTextFile.innerHTML="Validando schemas do arquivo";
setTimeout(function()
{
if(convertToJson.filesSchemas=="APIsMCD1.0.0")
{
    displayTextFile.innerHTML="Schemas validado com sucesso!<br>Configurando a requisição.";
    setTimeout(function()
    {
        
        ReadFileInput(convertToJson)   
    },3000);
    
    

    

}
else
{
    displayTextFile.innerHTML="<span style='color:red'>Erro! Falha ao validar schemas do arquivo. O mesmo não é um arquivo válido de requisição do APIsMCD.</span>";
}
},3000);    
}

function ValidateJson(JsonFile)
{
try
{
JSON.parse(JsonFile);
}
catch (EX)
{
    
return false;
}
return true;
}


