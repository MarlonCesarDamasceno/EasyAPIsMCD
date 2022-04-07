function ActvateImport()
{
let btnImport=document.getElementById("btnShowImport");
let showDivImport=document.getElementById("showImport");
let icos=document.getElementById("icosExpand");
if(showDivImport.style.display=="none")
{
    showDivImport.style.display="block";
    btnImport.setAttribute("aria-expanded", "true");
    btnImport.setAttribute("class", "btn btn-default btns btnOK")
    icos.setAttribute("class", "glyphicon-minus");
    SoundShowFields();
}
else
{
    showDivImport.style.display="none";
    btnImport.setAttribute("aria-expanded", "false");
    btnImport.setAttribute("class", "btn btn-default btns btnOK")
    icos.setAttribute("class", "glyphicon-plus");
}
}