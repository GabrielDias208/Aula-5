function calcular(){
    let codigo = Number(document.getElementById("codigo").value)
    let quantidade = Number(document.getElementById("quantidade").value)
    let texto = document.getElementById("texto")
    let total = 0

    //testando is códigos dos lanches
    switch (codigo) {
        case 1:
            total = quantidade * 20.00
            break;
        case 2:
            total = quantidade * 5.00
            break;
        case 3:
            total = quantidade * 30.00
            break;
        case 4:
            total = quantidade * 69.00
            break;
        case 5:
            total = quantidade * 35.69
            break;
        case 6:
            total = quantidade * 84.00
            break;
        case 7:
            total = quantidade * 79.00
            break;
            
        default:
            total = 'Código inválido'
            break;
    }

    texto.innerHTML = "R$ " + total 
}
