const capitalize=(string)=> {
    let newString=string[0].toUpperCase();
    for(let i=1;i<string.length;i++) {
        newString+= string[i];
    }
    return newString
}

module.exports =  capitalize