function teste1()
{
    const str=document.getElementById("xpeS3mdjskwp023918qmYrt3MklqrwxpshdmcuiowpqZAQW10000090000129").innerText;

    const encrypt=new TextEncoder('utf-8').encode(str);
    const xps=crypto.subtle.digest('SHA-1', encrypt);
const generateHash=Array.from(new Uint8Array(xps)).map(x=>x.toString(16).padStart(2,'0')).join('');
document.getElementById("t1").innerHTML="teste: "+generateHash;7
}
