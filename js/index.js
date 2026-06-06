function somar(){
    console.log(1 + 1);
} 

function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

console.log(calcularIdade(2005));