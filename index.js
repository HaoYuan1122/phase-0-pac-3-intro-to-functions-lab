function shout(string){
    return string.toUpperCase()
}
function whisper(string){
    return string.toLowerCase()
}
function logShout(string){
    console.log(string.toUpperCase())
}
function logWhisper(string){
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string){
    const Ustring=string.toUpperCase()
    const Lstring=string.toLowerCase()
    if(Ustring === string){
        return "YES INDEED!"
    }else if(Lstring === string){
        return "I can't hear you!"
    }else{
        return "I would love to!"
    }
}

