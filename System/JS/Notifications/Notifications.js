const srcFile="System/SoundsNotifications/";

function SoundError()
{
    SoundAlert("Error");
}

function SoundGenericError()
{
    SoundAlert("GenericError");
}

function SoundSendRequisition()
{
SoundAlert("SendRequisition");
}

function SoundShowFields()
{
    SoundAlert("ShowFields");
}

function SoundReadedFile()
{
    SoundAlert("ReadedFile");
}

function SoundSuccessRequisition()
{
    SoundAlert("SuccessRequisition");
}

function SoundAlert(fileName)
{
    
const sound=new Audio(srcFile+fileName+'.wav');
sound.play();
sound.loop=false;
sound.playbackRate=1;
//sound.pause();
}
