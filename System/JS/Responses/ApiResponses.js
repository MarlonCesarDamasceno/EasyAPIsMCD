//Desenvolvido por Marlon Cesar Damasceno
//resultado da requisição

function ResponseApiData(statusHttp, responseText)
{
    SoundSuccessRequisition();
    document.getElementById("statusResponse").value="true";
let displayResult=document.getElementById("resultResponse");
let resultHttpStatus=document.getElementById("statusHttpResponse");
let resultResponseText=document.getElementById("resultTextResponse");
let response="";
displayResult.style.display="block";
try
{


resultHttpStatus.innerHTML="Response status code http: "+ StatusHTTP(statusHttp);

for (caractere=0; caractere<=responseText.length-1; caractere++)
{
    if(responseText[caractere]=="[" || responseText[caractere]=="]" || responseText[caractere]=="{" || responseText[caractere]=="}" || responseText[caractere]==",") 
    {
        response+=responseText[caractere]+"<br>";
        continue;
    }
    else
    {
        response+=responseText[caractere];
    }
}

resultResponseText.innerHTML=response;
}
catch (ex)
{
    alert(ex);
}
}

