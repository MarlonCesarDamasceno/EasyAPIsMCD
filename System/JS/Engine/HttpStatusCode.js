//Desenvolvido por Marlon Cesar Damasceno.
//Validação de resposta da Api.

function StatusHTTP(httpStatus)
{
let response="";
switch (httpStatus)
{
 case   200:
     response="200 OK";
     break;
     case 201:
         response="201 Created";
         break;
         case 202:
             response="202 Accepted";
break;
case 203:
    response="203 Non-Authoritative Information";
    break;
case 204:
    response="204 No Content";
    break;
    case 205:
        response="205 Reset Content";
        break;
case 206:
    response="206 Partial Content";
    break;
    case 300:
        response="300 Multiple Choices";
break;
case 301:
    response="301 Moved Permanently";
    break;
    case 302:
        response="302 Found";
break;
case 303:
    response="303 See Other";
    break;
case 304:
    response="304 Not Modified";
    break;
case 307:
    response="307 Temporary Redirect";
    break;
    case 308:
        response="308 Permanent Redirect";
        break;
        case 400:
            response="400 Bad Request";
break;
case 401:
    response="401 Unauthorized";
break;
case 402:
    response="402 Payment Required";
    break;
case 403:
    response="403 Forbidden";
    break;
    case 404:
        response="404 Not Found";
break;
case 405:
    response="405 Method Not Allowed";
    break;
    case 406:
        response="406 Not Acceptable";
        break;
case 407:
    response="407 Proxy Authentication Required";
    break;
case 408:
    response="408 Request Timeout";
    break;
    case 409:
        response="409 Conflict";
        break;
        case 410:
            response="410 Gone";
            break;
            case 411:
                response="411 Length Required";
                break;
                case 412:
                    response="412 Precondition Failed";
                    break;
                    case 413:
response="413 Payload Too Large";
break;
case 414:
    response="414 URI Too Long";
    break;
    case 415:
        response="415 Unsupported Media Type";
break;
case 416:
    response="416 Range Not Satisfiable";
    break;
    case 417:
        response="417 Expectation Failed";
break;
case 418:
response="418 I'm a teapot";
break;
case 422:
    response="422 Unprocessable Entity";
break;
case 425:
    response="425 Too Early";
    break;
    case 426:
        response="426 Upgrade Required";
break;
case 428:
    response="428 Precondition Required";
    break;
    case 429:
        response="429 Too Many Requests";
        break;
case 431:
    response="431 Request Header Fields Too Large";
    break;
    case 451:
        response="451 Unavailable For Legal Reasons";
        break;
        case 500:
            response="500 Internal Server Error";
            break;
            case 501:
                response="501 Not Implemented";
                break;
case 502:
    response="502 Bad Gateway";
break;

case 503:
    response="503 Service Unavailable";
    break;
    case 504:
        response="504 Gateway Timeout";
        break;
        case 505:
            response="505 HTTP Version Not Supported";
            break;
case 506:
    response="505 HTTP Version Not Supported";
    break;
    case 507:
        response="507 Insufficient Storage";
        break;
        case 508:
            response="508 Loop Detected";
            break;
            case 510:
                response="510 Not Extended";
break;
case 511:
    response="511 Network Authentication Required";
    break;


}
return response;
}