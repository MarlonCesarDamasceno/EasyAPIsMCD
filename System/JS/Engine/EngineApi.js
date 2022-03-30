function StartRequisition(uri, _method, bodyRequest, token, arrayHeaderName, arrayKeyValue)
{
    let displayResult=document.getElementById("resultResponse");
    let resultHttpStatus=document.getElementById("statusHttpResponse");
    let resultResponseText=document.getElementById("resultTextResponse");
let metod="";
if(_method==1)
metod="GET";
else
metod="POST";


let request=new XMLHttpRequest();
request.open(metod, uri, true);
if(metod=="POST")
{
request.setRequestHeader("Content-type", "application/json")

if(token!="")
SendAuthToken(request, token);
SetHeaders(request, arrayHeaderName,arrayKeyValue);

request.send(bodyRequest);
}



request.onload=function()
{
try
{
    ResponseApiData(this.status, this.responseText);
}
        catch (EX)
        {
            alert(EX);
        }
};




if(metod=="GET")
{
    
    if(token!="")
    SendAuthToken(request, token);
SetHeaders(request, arrayHeaderName,arrayKeyValue);

    request.send(null);

}
}

function SendAuthToken(request, authToken)
{
    request.setRequestHeader("Authorization: Bearer", authToken);
}

function SetHeaders(request, headerName, headerValue)
{
    
    if(headerName.length!=0 && headerValue.length!=0 && headerName.length==headerValue.length)
    {
        arrayHeaders=JSON.parse(headerName);
    arrayKeys=JSON.parse(headerValue);
    count=arrayHeaders.length;

    for (i=0; i<count; i++)
{
        for (next=0; next<=arrayKeys.length-1; next++)
        {
    request.setRequestHeader(arrayHeaders[next], arrayKeys[next]);
        continue;
        }
            }
        }   
}

function ExceptionRequisition(ex)
{
    let displayResult=document.getElementById("resultResponse");
    let resultHttpStatus=document.getElementById("statusHttpResponse");
    let resultResponseText=document.getElementById("resultTextResponse");
    let response="";
    displayResult.style.display="block";
        

resultHttpStatus.innerHTML="Erro da aplicação";
resultResponseText.innerHTML="Ocorreu um erro inesperado ao fazer a requisição. Por gentileza, analise o erro e verifique se os parâmetros da sua requisição estão corretos.<br>Se sua chamada está sendo para uma api externa, verifique se seu computador está devidamente conectada a rede e se não há algum bloqueio.<br>Se sua chamada está sendo realizada para uma api localhost, verifique se você ativou o CORS na sua aplicação. Atenção, é importante ativar o COR!<br>Erro genérico: "+Exception+".";

}
