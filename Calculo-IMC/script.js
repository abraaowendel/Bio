var btn = document.getElementById('btn')
btn.addEventListener('click', calcularIMC)
function calcularIMC(){
    var altu = document.getElementById('altura')
    var pes = document.getElementById('peso')
    var res = document.getElementById('resultado')
    if (altu.value.length == 0 || pes.value.length == 0){
        alert('Preencha os dados.')
    }
    else{
        var cm = Number(altu.value) / 100
        var kg = Number(pes.value)
        var formula = (kg / (cm ** 2)).toFixed(1)
        res.innerHTML = `SEU IMC: ${formula}`

    }
}
