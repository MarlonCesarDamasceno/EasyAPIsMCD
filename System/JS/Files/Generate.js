function SaveRequisition()
{
    let displayFeedback=document.getElementById("feedback");
    let downloadLink=document.getElementById("linkDown");
    let requisitionParameters=[];
    let fileName=document.getElementById("file").value;

let headersListName=document.getElementById("headerList").value;
let headersListKeys=document.getElementById("keyList").value;
let arrayHeaderName="[]";
let arrayHeaderValue="[]";

//let convertToArrayHeaderName=JSON.parse(headersListName);
//let convertToArrayHeaderValue=JSON.parse(headersListKeys);

let formatedBodyRequisition="[{}]";

if(headersListName!="")
{
arrayHeaderName=JSON.parse(headersListName);
}
 if(headersListKeys!="")
{
arrayHeaderValue=JSON.parse(headersListKeys);
}
let url=document.getElementById("url").value;
let methodRequisition=document.getElementById("method");
let token=document.getElementById("token").value;
let bodyRequestUnformated=document.getElementById("body").value;
let bodyRequest=bodyRequestUnformated.replace(/(\r\n|\n|\r)/gm, "");

let selectedMethod=methodRequisition.options[methodRequisition.selectedIndex].value;

if(selectedMethod==2)
{
    formatedBodyRequisition=bodyRequest;
}

let json='{"filesSchemas": "APIsMCD1.0.0",';
    json+=' "URL": "'+url+'",';
json+='"method":'+selectedMethod+',';
json +='"bodyRequisition": '+formatedBodyRequisition+',';
json+='"token": "'+token+'",';
json +='"headerName": '+arrayHeaderName+',';
json +='"headerValue": '+arrayHeaderValue+'}';


let generateJsonParameters=JSON.stringify(requisitionParameters);



let generateLink=document.createElement('a');
generateLink.href='data:application/octet-stream;charset=utf-8,' +json;

generateLink.download=fileName+"_Easy_APIs.json"; 


generateLink.click();
displayFeedback.innerHTML='<p class="text-success">Seu arquivo foi gerado com sucesso e está pronto para ser salvo no seu computador!</p>'; 
downloadLink.innerHTML=generateLink;
}