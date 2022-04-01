function ShowSave()
{
    let optionSave=document.getElementById("displaySave").checked;
    let showDisplay=document.getElementById("displaySaveRequisition");

if(optionSave)
showDisplay.style.display="block";
else
showDisplay.style.display="none";

}