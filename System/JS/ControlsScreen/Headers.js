var converte={};
var jsonData={};
var teste=0;
var cont=0;

var headers=[];
var keys=[];
//alerta que vai dizer que o campo foi criado
function criado(cont)
{
	displayHeader=document.getElementById("displayHeaders");
displayHeader.innerHTML="campo header ("+cont+") adicionado";
	setTimeout(function()
	{
		displayHeader.innerHTML="";
	}, 2000);
}

function salvo()
{
    displayHeader=document.getElementById("displayHeaders");
	displayHeader.innerHTML="Headers salvos com sucesso!";
	setTimeout(function()
	{
		displayHeader.innerHTML="";
	}, 3000);

	
	
}

function erro(msgError)
{
    SoundError();
    displayHeader=document.getElementById("displayHeaders");
	displayHeader.innerHTML=msgError;
    displayHeader.setAttribute("style", "color:red");
	setTimeout(function()
	{
		displayHeader.innerHTML="";
	}, 3000);

	
	
	
}

function HeaderCreat()
{
for (i=0; i<=1-1;i++)
{
cont=(cont+1);
criado(cont)
idHeaderName="headerName"+cont;    
idKeyValue="keyValue"+cont;
label=document.createElement("label");
label.setAttribute("for", idHeaderName);
label.textContent="Nome do header ("+cont+")";
label.setAttribute("class", "control-label");

inputHeaderName=document.createElement("input");
inputHeaderName.setAttribute("type", "text");
inputHeaderName.setAttribute("name", "headerName");
inputHeaderName.setAttribute("id",idHeaderName );
inputHeaderName.setAttribute("class",  "form-control");
inputHeaderName.setAttribute("placeholder", "Insira corretamente o nome do header.");


labelKeyValue=document.createElement("label");
labelKeyValue.setAttribute("for", idKeyValue);
labelKeyValue.textContent="Valor da chave do header ("+cont+")";
labelKeyValue.setAttribute("class", "control-label");

inputKeyValue=document.createElement("input");
inputKeyValue.setAttribute("type", "text");
inputKeyValue.setAttribute("name", "headerKeyValue");
inputKeyValue.setAttribute("id", idKeyValue);
inputKeyValue.setAttribute("class",  "form-control");
inputKeyValue.setAttribute("placeholder", "Insira corretamente o valor do header.");
insertHeaders=document.getElementById("insert");
insertHeaders.appendChild(label);
insertHeaders.appendChild(inputHeaderName);
insertHeaders.appendChild(labelKeyValue);
insertHeaders.appendChild(inputKeyValue);

}
}

function ToSaveHeaders()
{
    
    for (x=1; x<=cont; x++) 
    {
       nameHeader=document.getElementById("headerName"+x).value;
       if(nameHeader!="")
        headers.push(nameHeader);
    
    }
    jsonDataHeader=JSON.stringify(headers);

    if(frmRequisition.headerList.value=="")
    {
        frmRequisition.headerList.value=jsonDataHeader;
    }


    


    ToSaveKeys();
}

function ToSaveKeys()
{

    for (keyPosition=1; keyPosition<=cont; keyPosition++)
    {
        valueKey=document.getElementById("keyValue"+keyPosition).value;
        if(valueKey!="")
        keys.push(valueKey);
        
    }
    jsonData=JSON.stringify(keys);
if(    frmRequisition.keyList.value=="")
{
    frmRequisition.keyList.value=jsonData;
}


    



}



function Salvar()
{
    ToSaveHeaders();
 


 if(headers.length>0 && keys.length>0)
 {
 if(frmRequisition.headerList.value!="" && frmRequisition.keyList.value!="")
 {
    salvo();
 }
 }
 else
 {
 erro("Erro! Adicione os headers com chaves e valores para salvar!");
 }


    }

