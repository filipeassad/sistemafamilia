var metasProfissinaisFilipe = [
    {'descricao': 'Fazer 5 cursos de carreiras na Alura;', 'submetas': ['Desenvolvedor Node.js', 'Desenvolvedor Front-end', 'SQL com Microsoft SQL Server 2017', 'Desenvolvimento mobile com Kotlin', 'Programador Ionic']},
    {'descricao': 'Terminar o projeto GUIAPRO;', 'submetas': []},
    {'descricao': 'Terminar o projeto Tinder Cachorros;', 'submetas': []},
    {'descricao': 'Terminar o Aprenda no play;', 'submetas': []},
    {'descricao': 'Criar aplicativo de gerencimento de condomínios;', 'submetas': []}
];

var metasFinanceirasFilipe = [
    {'descricao': 'Juntar a reserva de emergencia;', 'submetas': []},
    {'descricao': 'Adicionar os gastos com as minhas filhas de maneira confortável;', 'submetas': []},
    {'descricao': 'Fazer a compra do mês a vista;', 'submetas': []},
    {'descricao': 'Pagar a gasolina a vista;', 'submetas': []}
];

var metasCasaFilipe = [
    {'descricao': 'Construir a garagem da casa;', 'submetas': []},
    {'descricao': 'Construir a cozinha nos fundos da casa;', 'submetas': []},
    {'descricao': 'Construir um closet com banheiro no quarto do casal;', 'submetas': []}
];

var metasBemEstarFilipe = [
    {'descricao': 'Ler 5 livros;', 'submetas': []},
    {'descricao': 'Aprender 5 novas receitas para cozinhar;', 'submetas': []},
    {'descricao': 'Doar sangue antes das tatuagens;', 'submetas': []},
    {'descricao': 'Fazer a tatuagem do Shadow of the Colossus;', 'submetas': []},
    {'descricao': 'Fazer a tatuagem das minhas filhas;', 'submetas': []}
];

var metasAlcancadasProfissinaisFilipe = [];
var metasAlcancadasFinanceirasFilipe = [];
var metasAlcancadasCasaFilipe = [];
var metasAlcancadasBemEstarFilipe = [];

var cardapioJaneiro2018 = [
    
   { 'dataCardapio': new Date(2019, 0, 21), 'almoco': '', 'janta': 'Nuggets' },
   { 'dataCardapio': new Date(2019, 0, 22), 'almoco': '', 'janta': 'Bife Acebolado' },
   { 'dataCardapio': new Date(2019, 0, 23), 'almoco': '', 'janta': 'Misto quente' },
   { 'dataCardapio': new Date(2019, 0, 24), 'almoco': '', 'janta': 'Calabresa Ac.' },
   { 'dataCardapio': new Date(2019, 0, 25), 'almoco': '', 'janta': 'X-Burguer' },
   { 'dataCardapio': new Date(2019, 0, 26), 'almoco': 'Lasanha', 'janta': 'Capelete' },
   { 'dataCardapio': new Date(2019, 0, 27), 'almoco': 'Panqueca', 'janta': 'Macarrão Vermelho' },
   { 'dataCardapio': new Date(2019, 0, 28), 'almoco': '', 'janta': 'Misto quente' },
   { 'dataCardapio': new Date(2019, 0, 29), 'almoco': '', 'janta': 'Bife Acebolado' },
   { 'dataCardapio': new Date(2019, 0, 30), 'almoco': '', 'janta': 'Nuggets' },
   { 'dataCardapio': new Date(2019, 0, 31), 'almoco': '', 'janta': 'Sobá' }

];

var produtosLimpeza = [
   new Produto('Sabão em pó', 2, 25.00),
   new Produto('Amaciante', 1, 20.00)
];

var higienePessoal = [
   new Produto('Pasta de dente', 1, 2.00),
   new Produto('Escova de dente', 1, 3.00),
   new Produto('Fio dental', 1, 5.00),
   new Produto('Desodorante', 2, 3.00),
   new Produto('Detergente', 1, 1.50)
];

var besteiras = [
   new Produto('Aveia', 1, 5.50),
   new Produto('Aveia em pó', 1, 3.50),
   new Produto('Biscoito', 12, 1.50),
   new Produto('Miojo', 4, 0.80),
   new Produto('Leite em pó', 4, 8.50),
   new Produto('Nescau', 3, 14.50),
   new Produto('Chocolate', 4, 4.50)
];

var bebidas = [
   new Produto('Suco', 4, 6.50),
   new Produto('Coca-Cola', 4, 7.50),   
   new Produto('Sub-Zero', 200, 1.90)
];

var comidas = [
   new Produto('Molho de tomate', 3, 6.50),
   new Produto('Salsicha', 2, 8.50),
   new Produto('Pão de Forma', 1, 5.50),
   new Produto('Macarrão', 4, 3.50),
   new Produto('Calabresa', 4, 12.50),
   new Produto('Massa para lasanha', 1, 6.50),
   new Produto('Nuggets', 4, 7.50),
   new Produto('Requeijão', 1, 3.50),
   new Produto('Ovo', 1, 10.50),
   new Produto('Capelete', 1, 7.50),
   new Produto('Bacon', 2, 7.50),
   new Produto('Champignon', 1, 7.50),
   new Produto('Pão de Hambúrguer', 1, 6.50),
   new Produto('Hamburguer', 4, 12.50)
] 

var legumes = [
   new Produto('Cebola', 5, 5.50),
   new Produto('Tomate', 2, 7.50),
   new Produto('Alface', 1, 3.50),
   new Produto('Gengibre', 2, 2.50)
];

var frutas = [
   new Produto('Banana', 2, 5.50),
   new Produto('Maçã', 2, 2.50),
   new Produto('Melancia', 1, 15.00)
]; 

function Produto(nome, quantidade, preco){
   this.nome = nome;
   this.quantidade = quantidade;
   this.preco = preco;
   this.valorTotal = preco * quantidade;
}

