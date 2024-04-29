//input
anoNascimento = 1998;
nome = "Ana Luiza";
salarioBase = 1000;
gratificacao = 500; 
bonus = 200;
desconto = 300;

salarioLiquido = 0;

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear();
idade = anoAtual - anoNascimento;

salarioLiquido = salarioBase + gratificacao + bonus - desconto

//output
mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$" + salarioLiquido;
alert(mensagem);
