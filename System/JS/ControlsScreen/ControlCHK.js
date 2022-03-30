function HabilitarAutenticacao()
{
    let getAnswerAuthentication=document.getElementById("authentication").checked;
    let tokenField=document.getElementById("token");
    if(getAnswerAuthentication==true)
    tokenField.readOnly=false;
else
tokenField.readOnly=true;
}