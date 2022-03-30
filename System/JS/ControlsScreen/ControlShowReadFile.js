function ActvateImport()
{
let btnImport=document.getElementById("btnShowImport");
let showDivImport=document.getElementById("showImport");
let icos=document.getElementById("icosExpand");
if(showDivImport.style.display=="none")
{
    showDivImport.style.display="block";
    btnImport.setAttribute("aria-expanded", "true");
    icos.setAttribute("class", "glyphicon-minus");
}
else
{
    showDivImport.style.display="none";
    btnImport.setAttribute("aria-expanded", "false");
    icos.setAttribute("class", "glyphicon-plus");
}
}