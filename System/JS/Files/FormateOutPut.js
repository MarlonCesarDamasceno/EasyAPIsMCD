function JsonFormate(jsonData)
{
    
    responseJson="";
    if(jsonData.length>4)
    {
    
    for (caractere=0; caractere<=jsonData.length-1; caractere++)
    {
        if(jsonData[caractere]=="[" || jsonData[caractere]=="]" || jsonData[caractere]=="{" || jsonData[caractere]=="}" || jsonData[caractere]==",") 
        {
            responseJson +=jsonData[caractere]+"<br>";
            continue;
        }
        else
        {
            responseJson+=jsonData[caractere];
        }
            }
        }
            return responseJson;
        }