let str = "hello"

let newstr = ""
let num = 0


for(let i = 0; i < str.length;i++){
    if(str[i] == "a" || str[i] == "e" || str[i] == "u" || str[i] == "i" || str[i] == "o" || str[i] == "o'"){
        newstr += str[i]
    
    } 
    else{
        num++
    }
}

console.log( num);