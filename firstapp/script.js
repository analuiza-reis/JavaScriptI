//constantes
const SALARIO_ATE_20 = 1000;
const SALARIO_ACIMA_20 = 2000;

//input
nome = prompt("Informe o seu nome: ");
anoNascimento = parseInt(prompt("Informe o seu ano de nascimento:"));

salarioBase = parseFloat(prompt("Informe o salário:"));
gratificacao = parseFloat(prompt("Informe a gratificação:")); 
bonus = parseFloat(prompt("Informe o bônus:"));
desconto = parseFloat(prompt("Informe o desconto:"));

salarioLiquido = 0;
adicional = 0;

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear();
idade = anoAtual - anoNascimento;

adicional = 1000

salarioLiquido = salarioBase + gratificacao + bonus - desconto

//output
mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$" + salarioLiquido;
alert(mensagem);

