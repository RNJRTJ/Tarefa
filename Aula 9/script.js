function changeParagraph() {
    document.getElementById('paragraph').innerHTML = "Texto Alterado";
    console.log("Funcionou");
}

function changeNumber(title) {
    document.getElementById("number").innerHTML = `${title}`;
}

function showMyName(myName) {
    document.getElementById("name").innerHTML =  `O seu nome é: ${myName}`;
}

function showAlert() {
    window.alert("Alerta");
}

var color = "vermelho";
var color = "verde"; //redefinindo
color = "roxo"; //Atualizou

function changeColor() {
    color = "marrom";
    console.log(color);
}

console.log("Minha cor é: ", color);

//Processo de hoisting
var color;
console.log(color);
 color = "marrom";

//LET

let letColor = "verde";
// let letColor = "roxo"; //Não é possivel redefinir
letColor = "roxo"; //Atualizar
console.log(letColor);

let sayHi = "olá"
function sayHello() {
    let sayHi = "Olá, tudo bem?";

    console.log(sayHi); //Olá, tudo bem?
}
console.log(sayHi); //Ola

//Processo de hoisting LET
let teste;
console.log(teste); //refference error
teste = "Olá";

//CONST (não altera valor)
const [color, setColor] = "marrom"
const color = "verde" //Não funciona
const color = "roxo" // Não funciona

{
    const color = "verde"
    console.log(color);
}

const constcolor = {
    vermelho: "Vermelho",
    verde: "Verde",
};

color.vermelho = "vermelho claro";
color.verde = "verde escuro";

// Comentarios em Uma linha

/*
Comentarios em Varias linha
*/

// camelCase (changeParagraph) Inicio de cada Frase com Letra Maiuscula

