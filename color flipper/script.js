const colortext = document.getElementById("color")
const btn = document.getElementById("btn")
const wrap = document.getElementById("wrap")
const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',function(){
    let hexValue='#'
    for(let i = 1;i<=6;i++)
    {
        hexValue+=randValue()
    }
    wrap.style.backgroundColor = hexValue
    colortext.innerHTML = hexValue
})
function randValue(){
    let randIndex = Math.floor(Math.random()*16)
    return hex[randIndex]
}