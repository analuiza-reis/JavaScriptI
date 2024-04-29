//input
anoNascimento = 1998;
nome = "Ana Luiza";

//processamento
hoje = new Date();
anoAtual = hoje.getFullYear();
idade = 2024 - anoNascimento;
mensagem = "Sou " + nome + ", tenho " + idade + " anos.";

//output
alert(mensagem);
