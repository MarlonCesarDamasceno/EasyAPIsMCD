function ActiveHeader()
{
    let KeyPressHeader=document.getElementById("activateHeaders").checked;
    let showFieldsHeaders=document.getElementById("displayDivHeader");
    if(KeyPressHeader==true)
    showFieldsHeaders.style.display="block";
else
showFieldsHeaders.style.display="none";
}