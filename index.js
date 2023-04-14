alert("Digite suas notas dos 4 Bimestres:");

let nota_1= prompt("Nota do 1° Bimestre: ");
let nota_2= prompt("Nota do 2° Bimestre: ");
let nota_3= prompt("Nota do 3° Bimestre: ");
let nota_4= prompt("Nota do 4° Bimestre: ");

let nota= (Number(nota_1) + Number(nota_2) + Number(nota_3) + Number(nota_4)) / 4;

if(nota_1>10.0 || nota_2>10.0 || nota_3>10.0 || nota_4>10.0)
alert("Ual, Você é um gênio! Como você tirou notas acima de 10?\nPor favor, digite apenas valores entre 0 a 10");

else if(nota_1<0.0 || nota_2<0.0 || nota_3<0.0 || nota_4<0.0)
alert("Oush, Ficou devendo nota é? kkk\nPor favor, digite apenas valores entre 0 a 10");

else if(nota<5.0)
alert(`Sua média final é: ${nota} Resultado: Vixi, Reprovado!`);

else if(nota>5.0 && nota<7.0)
alert(`Sua média final é: ${nota} Resultado: Putz, Recuperação!`);

else if(nota>7.0)
alert(`Sua média final é: ${nota} Resultado: Aê, Aprovado!`);
