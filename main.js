var massege = prompt("Введите текст который нужно очистить:")
var res = ""

var isDel = false
for(char of massege){
    if(char === "<"){
        isDel = true
    }
    if(isDel === false){
        res += char
    }
    if(char === ">"){
        isDel = false
    }
}
console.log(res)
alert("Очищенный текст:"+ " " + res)