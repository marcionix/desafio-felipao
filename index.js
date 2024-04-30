const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let nome;
let exp;
let nivel = "não é computável ou não é numérico";
let computavel = 0;
rl.question("Qual o nome do herói?", function(nomeHeroi) { 
    nome = nomeHeroi;
    rl.question("Quanta experiência em o herói?", function(expHeroi) {
        exp = expHeroi;
    
        if(exp<1000){
            nivel = "Ferro"; computavel = 1;
        }else if(exp>=1001 & exp<=2000){
            nivel = "Bronze"; computavel = 1;
        }else if(exp>=2001 & exp<=5000){
            nivel = "Prata"; computavel = 1;
        }else if(exp>=5001 & exp<=7000){
            nivel = "Ouro"; computavel = 1;
        }else if(exp>=7001 & exp<=8000){
            nivel = "Platina"; computavel = 1;
        }else if(exp>=8001 & exp<=9000){
            nivel = "Ascendente"; computavel = 1;
        }else if(exp>=9001 & exp<=10000){
            nivel = "Imortal"; computavel = 1;
        }else if(exp>=10001){
            nivel = "Radiante"; computavel = 1;
        }
    
        if(computavel==1){
            console.log("O Herói de nome "+nome+" está no nível "+nivel);
        }else{
            console.log("O nível do herói "+nivel);
        }
        rl.close();
    });
});