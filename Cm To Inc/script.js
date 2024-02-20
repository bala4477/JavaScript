function convert()
{
    
    let CmValue = Number(document.getElementById("input").value);
    let IncValue = CmValue/2.54
    let result = document.getElementById("result");
    result.innerHTML=IncValue.toFixed(3) +"Inches";
}