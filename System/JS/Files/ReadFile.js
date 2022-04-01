function ReadFileInput(jsonData)
{
    let displayTextFile=document.getElementById("displayImport");
    displayTextFile.innerHTML="<span  style='color:green'>Arquivo validado e processado com sucesso! Sua requisição está configurada.</span>";
    SoundReadedFile();

    let uri=document.getElementById("url");
let methodRequisition=document.getElementById("method");
let tokenAccess=document.getElementById("token");
let bodyRequest=document.getElementById("body");
let getAnswerAuthentication=document.getElementById("authentication");
let KeyPressHeader=document.getElementById("activateHeaders");
let convert=jsonData;
bodyRequisitionText=JsonFormate(JSON.stringify(convert.bodyRequisition));

uri.value=convert.URL;

while (methodRequisition.length)
    {
        methodRequisition.remove(0);
    }

 if(convert.method==2)
{
    opt=document.createElement("option");
    opt.text="POST";
opt.value=convert.method;
methodRequisition.add(opt, methodRequisition.options[0]);
HabilitarBody();
bodyRequest.value=bodyRequisitionText;
}
else
{
    opt=document.createElement("option");
    opt.text="GET";
opt.value=convert.method;
methodRequisition.add(opt, methodRequisition.options[0]);
HabilitarBody();
}
if(convert.token!="")
{
    getAnswerAuthentication.checked=true;
tokenAccess.value=convert.token;
}

if(convert.headerName.length>0)
{
KeyPressHeader.checked=true;
ActiveHeader();

for (createFields=1; createFields<=convert.headerName.length; createFields++)
{
    HeaderCreat();
}




    for (readHeadersInArray=0; readHeadersInArray<=convert.headerName.length-1; readHeadersInArray++)
    {
        hr=document.getElementById("headerName"+(readHeadersInArray+1));
                hr.value=convert.headerName[readHeadersInArray];
        

        
    }
    
for (readHeaderKeyInArray=0; readHeaderKeyInArray<=convert.headerValue.length-1; readHeaderKeyInArray++)
{
    document.getElementById("keyValue"+(readHeaderKeyInArray+1)).value=convert.headerValue[readHeaderKeyInArray];
}

Salvar();
}
}

