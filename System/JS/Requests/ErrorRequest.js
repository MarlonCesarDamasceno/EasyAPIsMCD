function GenericError()
{
    let responseStatus=document.getElementById("statusResponse").value;
let displaySaveFile=document.getElementById("showSaveFile");
if(responseStatus=="true")
{
    displaySaveFile.style.display="block";
}

    if(responseStatus!="true")
    {

    
    SoundGenericError();
let status=document.getElementById("statusHttpResponse");
let responseR=document.getElementById("resultTextResponse");

status.setAttribute("style", "color:red");
status.innerHTML="Erro!";
responseR.innerHTML="Desculpe, ocorreu um erro genérico ao realizar sua requisição. Esse erro pode acontecer devido alguns fatores que deve ser levado em conta: <br><ul><li>Problema originado de CORS</li><li>URL inválida</li><li>Problema no sistema do EasyAPIsMCD</li></ul><br>Se seu problema for CORS, lembramos que esse sistema irá apenas funcionar se a API que deseja realizar o consumo, tiver o CORS habilitado. Caso seja sua api local, habilite o cors e teste novamente. <br>Caso o problema seja com URL inválida, o sistema irá tentar encontrar uma resposta e se não localizar, também irá gerar um erro de CORS. Valide se a URI e válida.<br>Se não for nem um dos problemas acima, talvez o problema esteja em algum ponto específico do sistema que esteja impactando ao fazer a requisição.<br>De todas as formas, expencione o sistema no seu navegador e valide qual é o erro que está ocorrendo. Caso precise de suporte, basta entrar em contato com o Desenvolvedor através dos dados no rodapé da tela.<br>Mais uma vez, desculpe!";
    }
}