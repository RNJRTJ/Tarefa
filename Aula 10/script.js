var x = 5; // numeros inteiros
var y = 6.5; // numeros decimais
var z = x + y; // calculos aritméticos
console.log("Valor de X:", x, "Valor de Y:",y, "Valor de Z:",z);

/*
var - let - const

var, em 2015 var passou a ser inutilizado e foi iniciado o desenvolvimento com let

let foi implementado em 2015, surgiu pra corrigir alguns bugs, formato de blocos

*/
var nome = "john doe";
var nome = "jose";
// representação do erro
var x = 5;
var x = 6;

let name = "john doe";
// let name = "john doe"; // -> SyntaxError: "Nome" has already been declared

// Com a let, possui outra funcionalidade importante, que é o escopo de blocos

{
    let x = 2;
}
console.log(x);
//Não pode ser utilizado fora do escopo

{
    var x = 2;
}
//X pode ser usado aqui
console.log(x);

//? Como isso pode impactar nosso código
var x = 10;
// Aqui o x = 10
{
    var x = 2;
// Aqui o x = 2
}
// Aqui o x = 2

//!Com a LET
let x = 10;
//Aqui o x = 10
{
    let x = 2;
    console.log(x);
}
console.log(x);
//Aqui o x = 10

/*
Principais diferenças entre let e var
 - var -> é possível atualizar e re-declarar suas informações. Podemos acessar fora e dentro de um escopo
 - let -> Não é possível re-declarar, apenas, atualizar. Não podemos acessar fora do nosso escopo
*/
//! CONST
const pi = 3.141592;
pi = 3.15; //Error
const pi1 = 3.16; //Error
//Const -> não podemos alterar, re-declarar e nem modificar
//Sempre declara como const o que for alterado


//! Operador de Atribuição "="
let num = 2 //Atribuindo ao number o valor de 2
num == 3; //verifica se o valor de num é igual a 3
num === 4; //Exatamente igual
console.log(num == 3); //false
console.log(num == 2); //true

//! Tipagem de dados
let nome = "João"; //Tipo string = Texto
// '' -> string normal
// "" -> string normal
// `meu nome é ${nome}` -> Meu nome é joão

let number = 2; // Tipo number = numero inteiro
let numberDecimal = 2.5; // Tipo number = numero decimal
let verificado = true; // Tipo boolean = verdadeiro 
let notVerificado = false; // Tipo boolean = falso
let test;
console.log(test); //Tipo undefined = Indefinido
console.log(testeNull); //Tipo null = Vazio

//É possível declarar mais de uma variável em uma instrução
//let car = "gol";
//let dono = "John Doe";
//let preco = 200;

let car= "gol",
dono = "John Doe",
preco = 200;

let moto = "honda",
    dono2 = "John Doe",
    preco1 = 200;

    let moto2 = "honda",
    dono3 = "John Doe",
    preco2 = 200;

//Tipo Objeto

let carro = {
    nome: "gol",
    dono: "John Doe",
    preco: 300,
};
let carro2 = {
    nome: "gol",
    dono: "John Doe",
    preco: 300,
};

let motos = {
    1: {
        nome: "honda",
        dono: "jose",
        preco: 200,
    },
    2: {
        nome: "Yamaha",
        dono: "jose",
        preco: 300,
    },
};