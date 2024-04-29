//input
nome = prompt("Informe o seu nome: ");
anoNascimento = parseInt(prompt("Informe o seu ano de nascimento:"));

salarioBase = parseFloat(prompt("Infrome o salário:"));
gratificacao = parseFloat(prompt("Infrome a gratificação:")); 
bonus = parseFloat(prompt("Infrome o bônus:"));
desconto = parseFloat(prompt("Infrome o desconto:"));

salarioLiquido = 0;

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear();
idade = anoAtual - anoNascimento;

salarioLiquido = salarioBase + gratificacao + bonus - desconto

//output
mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$" + salarioLiquido;
alert(mensagem);
