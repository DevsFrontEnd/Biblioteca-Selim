/* fução das categorias */
function filtroLivros(typefiltro) {
    const cards = document.querySelectorAll(".card-catalogo");
        cards.forEach(card => {
            const livroTipo = card.dataset.typefiltro;

            if (typefiltro === "all") {
                card.style.display = "block";
            }
            else if (livroTipo === typefiltro) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });
}

function abrirmenu(){
    const menu = document.getElementById("nav-celular");
    menu.style.display = "flex";
}

function fecharmenu(){
    const menu = document.getElementById("nav-celular");
    menu.style.display = "none";
}

/* função sobre nos */
function sobre(parte) {
  localStorage.setItem('sobrenos-pt2', parte);

  const titulo = document.getElementById('titulo-sobrenos');
  const texto = document.getElementById('texto-sobrenos');

  switch (parte) {
    case 'parte1':
      titulo.innerText = 'Nossa História';
      texto.innerText = 'A Biblioteca Selim é um projeto desenvolvido para a Feira Técnica da E.E. Selim José de Salles, com o objetivo de facilitar o acesso dos alunos aos recursos da biblioteca escolar. A plataforma permite consultar livros disponíveis, conhecer informações sobre as obras e acompanhar empréstimos, renovações e possíveis pendências.\n\nO projeto surgiu como uma oportunidade de aplicar, na prática, os conhecimentos adquiridos durante o curso de Desenvolvimento de Sistemas, utilizando a tecnologia para tornar os serviços da biblioteca mais organizados, acessíveis e eficientes.';
      break;

    case 'parte2':
      titulo.innerText = 'Nosso Objetivo';
      texto.innerText = 'Nosso objetivo é desenvolver uma plataforma digital que facilite a interação dos alunos com a biblioteca escolar, tornando a busca por livros e o gerenciamento de empréstimos mais simples e intuitivos.\n\nPor meio da Biblioteca Selim, buscamos incentivar o hábito da leitura, ampliar o acesso à informação e proporcionar uma experiência mais prática para os estudantes. Além disso, o projeto visa demonstrar como a tecnologia pode contribuir para melhorar os processos do ambiente escolar.';
      break;

    case 'parte3':
      titulo.innerText = 'Nossa Equipe';
      texto.innerText = 'Davi Augusto \n Gabriel Henrique \n Gustavo Ramos \n Kauan Oriques \n Lucas Oliveira  Paulo Oliver \n Paulo Oliver \n Pedro Henrique \n Samuel Teixeira \n Victor Pretes';
      break;

    case 'parte4':
      titulo.innerText = 'Nosso Compromisso';
      texto.innerText = 'Nosso compromisso é promover o acesso à leitura e ao conhecimento por meio de uma plataforma organizada, acessível e fácil de utilizar. Buscamos oferecer aos alunos uma maneira mais prática de conhecer os livros disponíveis e acompanhar suas atividades na biblioteca.\n\nValorizamos a educação, a inovação e o desenvolvimento dos estudantes, acreditando que a tecnologia, quando utilizada de forma adequada, pode aproximar as pessoas do conhecimento e contribuir para a formação de leitores mais interessados e conscientes.';
      break;
  }
}

/*infolivros*/
const livros = {
 livro1: {
 capalivro: "imgs/infolivro/capadepoisdaquelaviagem.jpeg",
 genero: "Autobiografia",
 titulo: "Depois daquela viagem",
 autor: "Valéria Piassa",
 descricao: "O livro Depois daquela viagem é a autobiografia de Valéria Piassa Polizzi, que contraiu o vírus HIV aos 16 anos na década de 1980. Escrita com linguagem jovem e direta, a obra narra o impacto do diagnóstico, o medo do preconceito e a superação da autora após iniciar um tratamento inovador no exterior, tornando-se uma grande referência nacional na conscientização sobre a AIDS.",
 isbn: "978-8508164295",
 editora: "Anglo",
 paginas: "288"
 },
 livro2: {
 capalivro: "imgs/infolivro/capaentendendoalgoritmos.jpeg",
 genero: "Tecnologia",
 titulo: "Entendendo Algoritmos",
 autor: "Aditya Y. Bhargava",
 descricao: "O livro Entendendo Algoritmos é uma introdução aos conceitos fundamentais de programação e algoritmos. Escrito com linguagem acessível e exemplos práticos, o livro ajuda os leitores a desenvolverem habilidades de pensamento lógico e resolução de problemas.",
 isbn: "978-85-7522-929-3",
 editora: "Novatec Editora",
 paginas: "328"
 },
 livro3: {
 capalivro: "imgs/infolivro/capairacema.jpeg",
 genero: "Romance",
 titulo: "Iracema",
 autor: "José de Alencar",
 descricao: "Iracema, obra-prima de José de Alencar publicada em 1865, é um dos maiores clássicos do Romantismo brasileiro. O livro conta a história de amor proibido entre Iracema, a 'virgem dos lábios de mel' e guardiã do segredo da jurema, e Martim, un guerreiro português.",
 isbn: "978-8578885250",
 editora: "Principis",
 paginas: "128"
 },
 livro4: {
 capalivro: "imgs/infolivro/capajavaparaleigos.jpeg",
 genero: "Tecnologia",
 titulo: "Java para Leigos",
 autor: "Dumies",
 descricao: "O livro 'Java Para Leigos' (da famosa série For Dummies) é o guia perfeito para quem deseja entrar no mundo da programação sem complicação. Com uma linguagem leve, divertida e totalmente acessível, o autor desmistifica a linguagem Java, transformando conceitos que parecem bichos de sete cabeças — como objetos, classes e loops — em passos simples e práticos. O foco da obra é colocar a mão",
 isbn: "978-8576088011",
 editora: "Alta Books",
 paginas: "424"
 },
 livro5: {
 capalivro: "imgs/infolivro/capalinuxbiblia.jpeg",
 genero: "Tecnogloia",
 titulo: "Linux a Biblia",
 autor: "Christine Bresnahan",
 descricao: "Linux: A Bíblia', escrito por Christopher Negus e publicado no Brasil pela Editora Alta Books, é considerado um dos guias mais abrangentes e definitivos sobre o sistema operacional. Com uma abordagem didática que vai do básico ao avançado, a obra serve tanto como um tutorial passo a passo para iniciantes quanto como um manual de referência profunda para profissionais. Seu conteúdo cobre desde a instalação e o domínio da linha de comando (terminal) até tarefas complexas de administração de servidores, segurança de rede e gerenciamento de múltiplas distribuições corporativas.",
 isbn: "978-8576087991",
 editora: "Alta Books",
 paginas: "856"
 },
 livro6: {
 capalivro: "imgs/infolivro/capaluciola.jpeg",
 genero: "Romance",
 titulo: "Luciola",
 autor: "José de Alencar",
 descricao: "Lucíola é uma das obras mais célebres de José de Alencar e um marco no retrato da sociedade carioca do Segundo Reinado. Narrada em primeira pessoa pelo jovem pernambucano Paulo, a história se passa no Rio de Janeiro de 1855. Recém-chegado à corte, Paulo se apaixona perdidamente por Lúcia, uma das cortesãs mais luxuosas, influentes e disputadas da aristocracia imperial.",
 isbn: "978-6555521511",
 editora: "Principis",
 paginas: "176"
 },
 livro7: {
 capalivro: "imgs/infolivro/capamalala.jpeg",
 genero: "Autobiografia",
 titulo: "Eu sou Malala",
 autor: "Malala",
 descricao: "Eu sou Malala: a história da garota que defendeu o direito à educação e foi baleada pelo Talibã, é uma autobiografia escrita por Malala Yousafzai em colaboração com a jornalista Christina Lamb, publicada em outubro de 2013.",
 isbn: "978-8565765626",
 editora: "Seguinte",
 paginas: "360"
 },
 livro8: {
 capalivro: "imgs/infolivro/capamemoriasposturasdebrascubas.jpeg",
 genero: "Romance",
 titulo: "Memória Postumas de Brás Cubas",
 autor: "Machado de Assis",
 descricao: "A história é narrada em primeira pessoa por um 'defunto-autor' — Brás Cubas, que faleceu aos 64 anos de pneumonia após tentar inventar um medicamento milagroso (o 'Emplasto Brás Cubas') —, o qual decide contar suas memórias do além-túmulo, livre das convenções e hipocrisias da vida. Com humor ácido, ironia e uma estrutura fragmentada em 160 capítulos, o livro expõe as vaidades, os amores fracassados.",
 isbn: "978-6580210015",
 editora: "Principis",
 paginas: "192"
 },
 livro9: {
 capalivro: "imgs/infolivro/capadomcasmurro.jpeg",
 genero: "Romance",
 titulo: "Dom Casmurro",
 autor: "Machado de Assis",
 descricao: "Dom Casmurro, uma das obras-primas de Machado de Assis publicada em 1899, é narrada em primeira pessoa pelo ciumento Bento Santiago, o Bentinho. Velho e solitário, ele reconstrói suas memórias de infância e juventude para tentar entender como o seu grande amor, Capitu, e seu melhor amigo, Escobar, teriam se aproximado. O romance gira em torno do tormento psicológico do protagonista e de sua suspeita de traição, deixando para o leitor o eterno mistério literário se a traição de fato aconteceu ou se foi apenas fruto da mente obsessiva de Bentinho.",
 isbn: "978-8525406798",
 editora: "L&PM",
 paginas: "128"

 },
 livro10: {
 capalivro: "imgs/infolivro/capaoalienista.jpeg",
 genero: "Ficção",
 titulo: "O Alienista",
 autor: "Machado de Assis",
 descricao: "O Alienista, clássico do escritor brasileiro Machado de Assis, é uma sátira genial sobre a ciência, a razão e a loucura. A história acompanha o médico Dr. Simão Bacamarte, que decide fundar a 'Casa Verde', um asilo na vila de Itaguaí, para estudar e tratar os distúrbios da mente. No entanto, sua obsessão científica o leva a classificar praticamente toda a população local como louca, desencadeando o caos na cidade e levantando uma profunda reflexão sobre onde realmente termina a sanidade e começa a demência.",
 isbn: "978-8525408426",
 editora: "L&PM",
 paginas: "128"
 },
 livro11: {
 capalivro: "imgs/infolivro/capavidassecas.jpeg",
 genero: "Romance",
 titulo: "Vidas Secas",
 autor: "Graciliano Ramos",
 descricao: "O livro Vidas Secas, clássico de Graciliano Ramos publicado em 1938, narra a trajetória comovente de uma família de retirantes que luta pela sobrevivência no sertão nordestino. Acompanhados pela fiel cachorra Baleia, o vaqueiro Fabiano, Sinhá Vitória e seus dois filhos atravessam a terra devastada pela seca em busca de trabalho e de uma vida mais digna. Com uma linguagem direta, precisa e desprovida de excessos, a obra denuncia a miséria extrema, a opressão social e a própria desumanização do homem sertanejo, cujas dificuldades de comunicação refletem a crueza do ambiente ao seu redor.",
 isbn: "978-8501114785",
 editora: "Record",
 paginas: "176"
 },
 livro12: {
 capalivro: "imgs/infolivro/capaocortico.jpeg",
 genero: "Romance",
 titulo: "O Cortiço",
 autor: "Aluísio Azevedo",
 descricao: "O Cortiço, obra-prima do Naturalismo brasileiro escrita por Aluísio Azevedo e publicada em 1890, retrata a vida dos moradores de uma habitação coletiva no Rio de Janeiro. O livro expõe a exploração do ambicioso comerciante português João Romão sobre seus inquilinos e a lavadeira Bertoleza, mostrando como o ambiente e o determinismo social moldam e degradam o comportamento humano. O próprio cortiço funciona como um personagem vivo que pulsa, transforma e, muitas vezes, corrompe a moral daqueles que nele vivem.",
 isbn: "978-8508158110",
 editora: "Ática",
 paginas: "232"
 },
 livro13: {
 capalivro: "imgs/infolivro/capajorgeamado.jpeg",
 genero: "Romance",
 titulo: "Capitães da Areia",
 autor: "Jorge Amado",
 descricao: "Capitães da Areia, obra-prima de Jorge Amado publicada em 1937, retrata a vida de um grupo de meninos abandonados que vivem em um trapiche degradado nas praias de Salvador, Bahia. Liderados pelo jovem Pedro Bala, esses garotos sobrevivem por meio de pequenos furtos e golpes, navegando por uma realidade marcada pela extrema pobreza, abandono social e violência urbana. Apesar da crueza de suas rotinas, o livro humaniza essas crianças ao explorar seus sonhos, laços de profunda solidariedade e o amadurecimento precoce, consolidando-se como uma contundente crítica social e um clássico da literatura brasileira.",
 isbn: "978-8535914061",
 editora: "Companhia das Letras",
 paginas: "280"
 },
 livro14: {
 capalivro: "imgs/infolivro/capaopequenoprincipe.jpeg",
 genero: "Fantasia",
 titulo: "O Pequeno Príncipe",
 autor: "Antoine de Saint-Exupéry",
 descricao: "Escrito por Antoine de Saint-Exupéry, O Pequeno Príncipe é uma fábula poética que narra o encontro entre um piloto de avião perdido no deserto do Saara e um menino misterioso vindo do asteroide B-612. Conforme o garoto compartilha suas viagens por outros planetas — marcados por adultos solitários e cheios de manias —, a história revela uma profunda crítica ao comportamento humano e à perda da imaginação. Ao lado de personagens marcantes como a raposa e a rosa, o livro aborda temas como o amor, a amizade, a solidão e a responsabilidade, imortalizando a célebre lição de que 'o essencial é invisível aos olhos.",
 isbn: "978-8522005230",
 editora: "Agir",
 paginas: "96"
 },
 livro15: {
 capalivro: "imgs/infolivro/capaannyfranck.jpeg",
 genero: "Autobiografia",
 titulo: "O Diário de Anne Frank",
 autor: "Anne Frank",
 descricao: "O Diário de Anne Frank é uma emocionante e dolorosa obra autobiográfica escrita por uma jovem judia durante a Segunda Guerra Mundial. Enquanto se escondia dos nazistas em um anexo secreto em Amsterdã, Anne relata em seu diário o cotidiano do confinamento, seus medos, conflitos familiares e as transformações da adolescência, além de suas reflexões profundas sobre a natureza humana e a esperança em dias melhores. O livro tornou-se um dos relatos mais poderosos e lidos sobre os horrores do Holocausto, eternizando a voz e o espírito resiliente de uma jovem cuja vida foi tragicamente interrompida.",
 isbn: "978-8501044457",
 editora: "Record",
 paginas: "352"
 },
 livro16: {
 capalivro: "imgs/infolivro/capaharrypoter.jpeg",
 genero: "Fantasia",
 titulo: "Harry Potter e a Pedra Filosofal",
 autor: "J. K. Rowling",
 descricao: "Acompanha um órfão de 11 anos que descobre ser um bruxo. Criado por tios abusivos, ele é convidado a estudar na Escola de Magia e Bruxaria de Hogwarts, onde faz amizade com Rony Weasley e Hermione Granger. Juntos, os três amigos embarcam em uma grande aventura para impedir que o temido Lord Voldemort roube a Pedra Filosofal e recupere seus poderes.",
 isbn: "978-8532530783",
 editora: "Rocco",
 paginas: "264"
 },
 livro17: {
 capalivro: "imgs/infolivro/capaquartododesejo.jpeg",
 genero: "Autobiográfia",
 titulo: "Quarto de Despejo",
 autor: "Carolina Maria de Jesus",
 descricao: "O livro 'Quarto de Despejo: Diário de uma Favelada', escrito por Carolina Maria de Jesus e publicado em 1960, é o relato real e impactante do cotidiano da autora na favela do Canindé, em São Paulo. Catadora de papel e mãe solo, Carolina utiliza uma linguagem simples, poética e visceral para registrar a luta diária contra a fome, a miséria e a desigualdade social. A obra funciona como um espelho das margens da sociedade, transformando o sofrimento em uma poderosa denúncia humana e política que se tornou um dos maiores clássicos da literatura brasileira.",
 isbn: "978-8508171271",
 editora: "Ática",
 paginas: "200"
 },
 livro18: {
 capalivro: "imgs/infolivro/capaahoradaestrela.jpeg",
 genero: "Romance",
 titulo: "A Hora da Estrela",
 autor: "Clarice Lispector",
 descricao: "A Hora da Estrela, último livro publicado em vida por Clarice Lispector em 1977, narra a trágica e invisível história de Macabéa, uma jovem datilógrafa alagoana de dezoito anos que vive de forma precária no Rio de Janeiro. Sob a ótica do narrador fictício Rodrigo S.M., a obra faz uma profunda reflexão sobre a miséria social, a alienação humana e a própria criação literária, revelando a beleza poética e existencial oculta na rotina de uma protagonista desprovida de qualquer vaidade ou autoconsciência.",
 isbn: "978-8532508126",
 editora: "Rocco",
 paginas: "82"
 },
 livro19: {
 capalivro: "imgs/infolivro/capaosirmaoskaramazov.jpeg",
 genero: "Romance filosófico",
 titulo: "Os Irmãos Karamazov",
 autor: "Fiódor Dostoiévski",
 descricao: "Os Irmãos Karamazov narra a história de uma família marcada por conflitos, rivalidades e questões morais. Os irmãos Dmitri, Ivan e Alexei possuem personalidades e visões de mundo diferentes, enquanto a relação conturbada com o pai desencadeia acontecimentos dramáticos. A obra explora temas como fé, razão, liberdade, culpa, responsabilidade e a natureza humana.",
 isbn: "978-8573266460",
 editora: "Editora 34",
 paginas: "1040"
 },
 livro20: {
 capalivro: "imgs/infolivro/capamaquinadotemplo.jpeg",
 genero: "Ficção",
 titulo: "A Máquina do Tempo",
 autor: "H. G. Wells",
 descricao: "A Máquina do Tempo acompanha um cientista que constrói um dispositivo capaz de viajar pelo tempo. Ao chegar a um futuro distante, ele encontra uma humanidade transformada e descobre uma sociedade dividida de maneira surpreendente. A narrativa mistura aventura e ficção científica, refletindo sobre a evolução humana, as desigualdades sociais e o destino da civilização.",
 isbn: "978-8525407188",
 editora: "L&PM",
 paginas: "128"
 },
 livro21: {
 capalivro: "imgs/infolivro/capaohomemmaisinteligentedomundo.jpeg",
 genero: "Ficção",
 titulo: "O Homem Mais Inteligente do Mundo",
 autor: "Augusto Cury",
 descricao: "A obra apresenta reflexões sobre a inteligência, as emoções e a maneira como as pessoas lidam com os desafios da vida. Por meio de uma narrativa voltada ao comportamento humano e ao autoconhecimento, Augusto Cury explora questões relacionadas à mente, às relações interpessoais e à busca por uma vida mais equilibrada. O livro convida o leitor a refletir sobre o conhecimento e a inteligência emocional.",
 isbn: "",
 editora: "",
 paginas: ""
 },
 livro22: {
 capalivro: "imgs/infolivro/capacaçadorcibernetico.jpeg",
 genero: "Ficção científica",
 titulo: "O Caçador Cibernético da Rua 13",
 autor: "",
 descricao: "Em uma narrativa de ficção científica, a tecnologia e o ambiente urbano se misturam em uma trama marcada por elementos cibernéticos, mistério e aventura. A história evoca um universo em que a relação entre os seres humanos e as máquinas ocupa um papel central, explorando os desafios e as possibilidades de um mundo tecnologicamente avançado.",
 isbn: "",
 editora: "",
 paginas: ""
 },
 livro23: {
 capalivro: "imgs/infolivro/capaminecraftdungeons.jpeg",
 genero: "Fantasia",
 titulo: "Minecraft Dungeons: Rise of the Arch-Illager",
 autor: "Matt Forbeck",
 descricao: "Baseado no universo de Minecraft Dungeons, o livro acompanha a trajetória de um jovem que enfrenta rejeição e dificuldades até entrar em contato com um poderoso artefato. A história apresenta a ascensão do Arch-Illager e os acontecimentos que levam ao conflito central do universo do jogo. A narrativa combina aventura, fantasia, ação e elementos do mundo de Minecraft.",
 isbn: "978-0593372675",
 editora: "Del Rey",
 paginas: "320"
 },
 livro24: {
 capalivro: "imgs/infolivro/capajogosvorazes.jpeg",
 genero: "Ficção científica",
 titulo: "Jogos Vorazes",
 autor: "Suzanne Collins",
 descricao: "Em Panem, uma sociedade dividida em distritos sob o controle da Capital, jovens são selecionados para participar dos Jogos Vorazes, uma competição televisionada em que precisam lutar pela sobrevivência. Katniss Everdeen se voluntaria para salvar a irmã e acaba enfrentando desafios que colocam à prova sua coragem e seus princípios. A obra aborda desigualdade, autoritarismo, sobrevivência e resistência.",
 isbn: "978-8579800248",
 editora: "Rocco",
 paginas: "400"
 },
 livro25: {
 capalivro: "imgs/infolivro/capasenhordosaneis.jpeg",
 genero: "Fantasia",
 titulo: "Senhor dos Anéis",
 autor: "J. R. R. Tolkien",
 descricao: "O Senhor dos Anéis é uma obra-prima da alta fantasia que narra a jornada do hobbit Frodo Bolseiro para destruir o Um Anel, um artefato de poder absoluto criado pelo Senhor do Escuro, Sauron.",
 isbn: "978-8595084711",
 editora: "HarperCollins Brasil",
 paginas: "608"
 }
};

function abrirlivro(infolivro) {
 localStorage.setItem(".infolivro", infolivro);
}

const tipolivro = localStorage.getItem(".infolivro");
const livro = livros[tipolivro];

if (livro) {
 
 /*CAPA-LIVRO*/
 const capalivro = document.getElementById("capa-livro");

 if (capalivro) {
 capalivro.src = livro.capalivro;
 }

 /*TITULO*/
 const titulo1 = document.getElementById("titulo-1");

 if (titulo1) {
 titulo1.innerText = livro.titulo;
 }
 const titulo2 = document.getElementById("titulo-2");

 if (titulo2) {
 titulo2.innerText = livro.titulo;
 }

 /*AUTOR(A)*/
 const autor1 = document.getElementById("autor-1");

 if (autor1) {
 autor1.innerText = livro.autor;
 }

 const autor2 = document.getElementById("autor-2");

 if (autor2) {
 autor2.innerText = livro.autor;
 }

 /*GENERO*/
 const genero1 = document.getElementById("genero-1");

 if (genero1) {
 genero1.innerText = livro.genero;
 }
 const genero2 = document.getElementById("genero-2");

 if (genero2) {
 genero2.innerText = livro.genero;
 }
 const genero3 = document.getElementById("genero-3");

 if (genero3) {
 genero3.innerText = livro.genero;
 }

 /*DESCRIÇÃO*/
 const descricao = document.getElementById("descricao");

 if (descricao) {
 descricao.innerText = livro.descricao;
 }

 /*ISBN*/
 const isbn1 = document.getElementById("isbn-1");

 if (isbn1) {
 isbn1.innerText = livro.isbn;
 }
 const isbn2 = document.getElementById("isbn-2");

 if (isbn2) {
 isbn2.innerText = livro.isbn;
 }

 /*EDITORA*/
 const editora1 = document.getElementById("editora-1");

 if (editora1) {
 editora1.innerText = livro.editora;
 }
 const editora2 = document.getElementById("editora-2");

 if (editora2) {
 editora2.innerText = livro.editora;
 }

 /*QUANTIDADE DE PAGINAS*/
 const paginas1 = document.getElementById("paginas-1");

 if (paginas1) {
 paginas1.innerText = livro.paginas;
 }
 const paginas2 = document.getElementById("paginas-2");

 if (paginas2) {
 paginas2.innerText = livro.paginas;
 }
}