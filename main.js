
var massege = prompt("Введите текст который нужно очистить:")
var isOk = true
if (massege.length < 1) {
    alert("Мы не сможем очистить пустое поле(")
    isOk = false
}
for (var i = 0; i < massege.length; i++) {
    if (massege[i] == "<") {
        for (var next = 2; i + next < massege.length; next++) {
            if (massege[i + next] == ">") {
                massege = massege.slice(0, i) + massege.slice(i + next + 1)
                break
            }
        }
    }
}
console.log(massege)
if (isOk) {
    alert("Очищенный текст:"+ " " + massege)
}
