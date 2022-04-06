
function Request()
{
    let  displayErros=document.getElementById("erros");
    let arrayErros=[];
    let textErros=["Erro: informe a URL da API.", "Erro: insira o token para fazer sua requisição.", "Erro: o JSON está inválido. Por gentileza valide as informações e envie o objeto novamente."];
let errorCount=0;    
let uri=document.getElementById("url").value;
let lblUri=document.getElementById("lblUrl");

let methodRequisition=document.getElementById("method");
let token=document.getElementById("token").value;
let lbToken=document.getElementById("lblToken");
let bodyRequest=document.getElementById("body").value;
let selectedMethod=methodRequisition.options[methodRequisition.selectedIndex].value;
let arrayHeaderName=document.getElementById("headerList").value;
let arrayKeyValue=document.getElementById("keyList").value;
let chkToken=document.getElementById("authentication").checked;
let lbBody=document.getElementById("lblBody");

let labels=JSON.parse(TextsLabel());

if(uri.length<=6)
{


lblUri.innerHTML=textErros[0];
lblUri.setAttribute("style", "color:red");
arrayErros.push(textErros[0]);
errorCount +=1;

}
else
{
lblUri.removeAttribute("style");    
    lblUri.innerHTML=labels.lblUri;
}

if(chkToken==true && token=="")
{
    
    lbToken.innerHTML=textErros[1];
    lbToken.setAttribute("style", "color:red");
    arrayErros.push(textErros[1]);
    errorCount +=1;
}
else
{
lbToken.innerHTML=labels.lblToken;   
lbToken.removeAttribute("style");    
}

if(selectedMethod==2 && !ValidateJson(bodyRequest))
{
    
    lbBody.innerHTML=textErros[2];
    lbBody.setAttribute("style", "color:red");
    arrayErros.push(textErros[2]);
    errorCount +=1;
}
else
{
    lbBody.innerHTML=labels.lbBody;
    lbBody.removeAttribute("style");    
}

if(errorCount>0)
{
    SoundError();
displayErros.setAttribute("style", "color:red");
displayErros.setAttribute("class", "textP")
displayErros.setAttribute("style", "text-align:center");
displayErros.setAttribute("role", "alert");
displayErros.innerHTML="Ops, ocorreram uns ou mais erros nos parâmetros da sua requisição.";

for (countError=0; countError<=arrayErros.length-1; countError++)
{
    displayErros.innerHTML +="<br>- <span style='color:red'>"+arrayErros[countError]+"</span>";
}
}
else
{
    SoundSendRequisition();
    displayErros.innerHTML="";

if(!StartRequisition(uri, selectedMethod, bodyRequest, token, arrayHeaderName, arrayKeyValue))    
{

    
setTimeout(function()
{
    
    GenericError();
},
2000);
}

}

}

function TextsLabel()
{
    let lblUri=document.getElementById("lblUrl");
let lbMethod=document.getElementById("lblMethod");
let lbAuthentication=document.getElementById("lblToken");
let lbHeaders=document.getElementById("lblHeaders");
let lbToken=document.getElementById("lblToken");
let lbBody=document.getElementById("lblBody");

let jsonLabels ='{';
jsonLabels +='"lblUri": "URL da API",';
jsonLabels +='"lblMethod": "'+lbMethod.innerText+'",';
jsonLabels +='"lblToken": "Token",';
jsonLabels +='"lblHeaders": "'+lbHeaders.innerText+'",';
jsonLabels +='"lbBody": "body"';
jsonLabels +="}";
return jsonLabels;
  

}