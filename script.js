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

/* função info livros */
function abrirlivro(infolivro) {
    localStorage.setItem(".infolivro", infolivro);
}

/* enviar as informações de cada livro */
let livro = localStorage.getItem(".infolivro");

if (document.getElementById("capa-livro-pt1")) {

    if (livro == "livro1") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capadepoisdaquelaviagem.jpeg";
        document.getElementById("genero-pt2").innerText = "Autobiografia";
        document.getElementById("genero-pt2-2").innerText = "Autobiografia";
        document.getElementById("genero-pt3").innerText = "Autobiografia";
        document.getElementById("titulo-pt2").innerText = "Depois Daquela Viagem";
        document.getElementById("titulo-pt3").innerText = "Depois Daquela Viagem";
        document.getElementById("autor-pt2").innerText = "Valéria Piassa";
        document.getElementById("autor-pt3").innerText = "Valéria Piassa";
        document.getElementById("descricao-pt2").innerText = "O livro Depois daquela viagem é a autobiografia de Valéria Piassa Polizzi, que contraiu o vírus HIV aos 16 anos na década de 1980. Escrita com linguagem jovem e direta, a obra narra o impacto do diagnóstico, o medo do preconceito e a superação da autora após iniciar um tratamento inovador no exterior, tornando-se uma grande referência nacional na conscientização sobre a AIDS.";
        document.getElementById("isbn-pt2").innerText = "978-8508164295";
        document.getElementById("isbn-pt3").innerText = "978-8508164295";
        document.getElementById("editora-pt2").innerText = "Anglo";
        document.getElementById("editora-pt3").innerText = "Anglo";
        document.getElementById("paginas-pt2").innerText = "288";
        document.getElementById("paginas-pt3").innerText = "288";
    }

    if (livro == "livro2") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capaentendendoalgoritmos.jpeg";
        document.getElementById("genero-pt2").innerText = "Tecnologia";
        document.getElementById("genero-pt2-2").innerText = "Tecnologia";
        document.getElementById("genero-pt3").innerText = "Tecnologia";
        document.getElementById("titulo-pt2").innerText = "Entendendo Algoritmos";
        document.getElementById("titulo-pt3").innerText = "Entendendo Algoritmos";
        document.getElementById("autor-pt2").innerText = "Aditya Y. Bhargava";
        document.getElementById("autor-pt3").innerText = "Aditya Y. Bhargava";
        document.getElementById("descricao-pt2").innerText = "O livro Entendendo Algoritmos é uma introdução aos conceitos fundamentais de programação e algoritmos. Escrito com linguagem acessível e exemplos práticos, o livro ajuda os leitores a desenvolverem habilidades de pensamento lógico e resolução de problemas.";
        document.getElementById("isbn-pt2").innerText = "978-85-7522-929-3";
        document.getElementById("isbn-pt3").innerText = "978-85-7522-929-3";
        document.getElementById("editora-pt2").innerText = "Novatec Editora";
        document.getElementById("editora-pt3").innerText = "Novatec Editora";
        document.getElementById("paginas-pt2").innerText = "328";
        document.getElementById("paginas-pt3").innerText = "328";
    }

    if (livro == "livro3") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capairacema.jpeg";
        document.getElementById("genero-pt2").innerText = "Romance";
        document.getElementById("genero-pt2-2").innerText = "Romance";
        document.getElementById("genero-pt3").innerText = "Romance";
        document.getElementById("titulo-pt2").innerText = "Iracema";
        document.getElementById("titulo-pt3").innerText = "Iracema";
        document.getElementById("autor-pt2").innerText = "José de Alencar";
        document.getElementById("autor-pt3").innerText = "José de Alencar";
        document.getElementById("descricao-pt2").innerText = "Iracema, obra-prima de José de Alencar publicada em 1865, é um dos maiores clássicos do Romantismo brasileiro. O livro conta a história de amor proibido entre Iracema, a 'virgem dos lábios de mel' e guardiã do segredo da jurema, e Martim, un guerreiro português.";
        document.getElementById("isbn-pt2").innerText = "978-8578885250";
        document.getElementById("isbn-pt3").innerText = "978-8578885250";
        document.getElementById("editora-pt2").innerText = "Principis";
        document.getElementById("editora-pt3").innerText = "Principis";
        document.getElementById("paginas-pt2").innerText = "128";
        document.getElementById("paginas-pt3").innerText = "128";
    }

    if (livro == "livro4") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capajavaparaleigos.jpeg";
        document.getElementById("genero-pt2").innerText = "Tecnologia";
        document.getElementById("genero-pt2-2").innerText = "Tecnologia";
        document.getElementById("genero-pt3").innerText = "Tecnologia";
        document.getElementById("titulo-pt2").innerText = "Java para leigos";
        document.getElementById("titulo-pt3").innerText = "Java para leigos";
        document.getElementById("autor-pt2").innerText = "Dumies";
        document.getElementById("autor-pt3").innerText = "Dumies";
        document.getElementById("descricao-pt2").innerText = "O livro 'Java Para Leigos' (da famosa série For Dummies) é o guia perfeito para quem deseja entrar no mundo da programação sem complicação. Com uma linguagem leve, divertida e totalmente acessível, o autor desmistifica a linguagem Java, transformando conceitos que parecem bichos de sete cabeças — como objetos, classes e loops — em passos simples e práticos. O foco da obra é colocar a mão";
        document.getElementById("isbn-pt2").innerText = "978-8576088011";
        document.getElementById("isbn-pt3").innerText = "978-8576088011";
        document.getElementById("editora-pt2").innerText = "Alta Books";
        document.getElementById("editora-pt3").innerText = "Alta Books";
        document.getElementById("paginas-pt2").innerText = "424";
        document.getElementById("paginas-pt3").innerText = "424";
    }

    if (livro == "livro5") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capalinuxbiblia.jpeg";
        document.getElementById("genero-pt2").innerText = "Tecnologia";
        document.getElementById("genero-pt2-2").innerText = "Tecnologia";
        document.getElementById("genero-pt3").innerText = "Tecnologia";
        document.getElementById("titulo-pt2").innerText = "Linux a biblia";
        document.getElementById("titulo-pt3").innerText = "Linux a biblia";
        document.getElementById("autor-pt2").innerText = "Christine Bresnahan";
        document.getElementById("autor-pt3").innerText = "Christine Bresnahan";
        document.getElementById("descricao-pt2").innerText = "'Linux: A Bíblia', escrito por Christopher Negus e publicado no Brasil pela Editora Alta Books, é considerado um dos guias mais abrangentes e definitivos sobre o sistema operacional. Com uma abordagem didática que vai do básico ao avançado, a obra serve tanto como um tutorial passo a passo para iniciantes quanto como um manual de referência profunda para profissionais. Seu conteúdo cobre desde a instalação e o domínio da linha de comando (terminal) até tarefas complexas de administração de servidores, segurança de rede e gerenciamento de múltiplas distribuições corporativas.";
        document.getElementById("isbn-pt2").innerText = "978-8576087991";
        document.getElementById("isbn-pt3").innerText = "978-8576087991";
        document.getElementById("editora-pt2").innerText = "Alta Books";
        document.getElementById("editora-pt3").innerText = "Alta Books";
        document.getElementById("paginas-pt2").innerText = "856";
        document.getElementById("paginas-pt3").innerText = "856";
    }

    if (livro == "livro6") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capaluciola.jpeg";
        document.getElementById("genero-pt2").innerText = "Romance";
        document.getElementById("genero-pt2-2").innerText = "Romance";
        document.getElementById("genero-pt3").innerText = "Romance";
        document.getElementById("titulo-pt2").innerText = "Luciola";
        document.getElementById("titulo-pt3").innerText = "Luciola";
        document.getElementById("autor-pt2").innerText = "José de Alencar";
        document.getElementById("autor-pt3").innerText = "José de Alencar";
        document.getElementById("descricao-pt2").innerText = "Lucíola é uma das obras mais célebres de José de Alencar e um marco no retrato da sociedade carioca do Segundo Reinado. Narrada em primeira pessoa pelo jovem pernambucano Paulo, a história se passa no Rio de Janeiro de 1855. Recém-chegado à corte, Paulo se apaixona perdidamente por Lúcia, uma das cortesãs mais luxuosas, influentes e disputadas da aristocracia imperial.";
        document.getElementById("isbn-pt2").innerText = "978-6555521511";
        document.getElementById("isbn-pt3").innerText = "978-6555521511";
        document.getElementById("editora-pt2").innerText = "Principis";
        document.getElementById("editora-pt3").innerText = "Principis";
        document.getElementById("paginas-pt2").innerText = "176 ";
        document.getElementById("paginas-pt3").innerText = "176 ";
    }

    if (livro == "livro7") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capamalala.jpeg";
        document.getElementById("genero-pt2").innerText = "Biografia";
        document.getElementById("genero-pt2-2").innerText = "Biografia";
        document.getElementById("genero-pt3").innerText = "Biografia";
        document.getElementById("titulo-pt2").innerText = "Eu sou Malala";
        document.getElementById("titulo-pt3").innerText = "Eu sou Malala";
        document.getElementById("autor-pt2").innerText = "Malala";
        document.getElementById("autor-pt3").innerText = "Malala";
        document.getElementById("descricao-pt2").innerText = "'Eu sou Malala: a história da garota que defendeu o direito à educação e foi baleada pelo Talibã' é uma autobiografia escrita por Malala Yousafzai em colaboração com a jornalista Christina Lamb, publicada em outubro de 2013.";
        document.getElementById("isbn-pt2").innerText = "978-8565765626";
        document.getElementById("isbn-pt3").innerText = "978-8565765626";
        document.getElementById("editora-pt2").innerText = "Seguinte";
        document.getElementById("editora-pt3").innerText = "Seguinte";
        document.getElementById("paginas-pt2").innerText = "360";
        document.getElementById("paginas-pt3").innerText = "360";
    }

    if (livro == "livro8") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capamemoriasposturasdebrascubas.jpeg";
        document.getElementById("genero-pt2").innerText = "Romance";
        document.getElementById("genero-pt2-2").innerText = "Romance";
        document.getElementById("genero-pt3").innerText = "Romance";
        document.getElementById("titulo-pt2").innerText = "Memória postumas de Brás Cubas";
        document.getElementById("titulo-pt3").innerText = "Memória postumas de Brás Cubas";
        document.getElementById("autor-pt2").innerText = "Machado de Assis";
        document.getElementById("autor-pt3").innerText = "Machado de Assis";
        document.getElementById("descricao-pt2").innerText = "A história é narrada em primeira pessoa por um 'defunto-autor' — Brás Cubas, que faleceu aos 64 anos de pneumonia após tentar inventar um medicamento milagroso (o 'Emplasto Brás Cubas') —, o qual decide contar suas memórias do além-túmulo, livre das convenções e hipocrisias da vida. Com humor ácido, ironia e uma estrutura fragmentada em 160 capítulos, o livro expõe as vaidades, os amores fracassados.";
        document.getElementById("isbn-pt2").innerText = "978-6580210015";
        document.getElementById("isbn-pt3").innerText = "978-6580210015";
        document.getElementById("editora-pt2").innerText = "Principis";
        document.getElementById("editora-pt3").innerText = "Principis";
        document.getElementById("paginas-pt2").innerText = "192";
        document.getElementById("paginas-pt3").innerText = "192";
    }

    if (livro == "livro9") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capadomcasmurro.jpeg";
        document.getElementById("genero-pt2").innerText = "Romance";
        document.getElementById("genero-pt2-2").innerText = "Romance";
        document.getElementById("genero-pt3").innerText = "Romance";
        document.getElementById("titulo-pt2").innerText = "Dom Casmurro";
        document.getElementById("titulo-pt3").innerText = "Dom Casmurro";
        document.getElementById("autor-pt2").innerText = "Machado de Assis";
        document.getElementById("autor-pt3").innerText = "Machado de Assis";
        document.getElementById("descricao-pt2").innerText = "Dom Casmurro, uma das obras-primas de Machado de Assis publicada em 1899, é narrada em primeira pessoa pelo ciumento Bento Santiago, o Bentinho. Velho e solitário, ele reconstrói suas memórias de infância e juventude para tentar entender como o seu grande amor, Capitu, e seu melhor amigo, Escobar, teriam se aproximado. O romance gira em torno do tormento psicológico do protagonista e de sua suspeita de traição, deixando para o leitor o eterno mistério literário se a traição de fato aconteceu ou se foi apenas fruto da mente obsessiva de Bentinho.";
        document.getElementById("isbn-pt2").innerText = "9788525406798";
        document.getElementById("isbn-pt3").innerText = "9788525406798";
        document.getElementById("editora-pt2").innerText = "L&PM";
        document.getElementById("editora-pt3").innerText = "L&PM";
        document.getElementById("paginas-pt2").innerText = "256";
        document.getElementById("paginas-pt3").innerText = "256";
    }

    if (livro == "livro10") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capaoalienista.jpeg";
        document.getElementById("genero-pt2").innerText = "Ficção";
        document.getElementById("genero-pt2-2").innerText = "Ficção";
        document.getElementById("genero-pt3").innerText = "Ficção";
        document.getElementById("titulo-pt2").innerText = "O Alienista";
        document.getElementById("titulo-pt3").innerText = "O Alienista";
        document.getElementById("autor-pt2").innerText = "Machado de Assis";
        document.getElementById("autor-pt3").innerText = "Machado de Assis";
        document.getElementById("descricao-pt2").innerText = "O Alienista, clássico do escritor brasileiro Machado de Assis, é uma sátira genial sobre a ciência, a razão e a loucura. A história acompanha o médico Dr. Simão Bacamarte, que decide fundar a 'Casa Verde', um asilo na vila de Itaguaí, para estudar e tratar os distúrbios da mente. No entanto, sua obsessão científica o leva a classificar praticamente toda a população local como louca, desencadeando o caos na cidade e levantando uma profunda reflexão sobre onde realmente termina a sanidade e começa a demência.";
        document.getElementById("isbn-pt2").innerText = "9788525408426";
        document.getElementById("isbn-pt3").innerText = "9788525408426";
        document.getElementById("editora-pt2").innerText = "L&PM";
        document.getElementById("editora-pt3").innerText = "L&PM";
        document.getElementById("paginas-pt2").innerText = "128";
        document.getElementById("paginas-pt3").innerText = "128";
    }

    if (livro == "livro11") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capavidassecas.jpeg";
        document.getElementById("genero-pt2").innerText = "Romance";
        document.getElementById("genero-pt2-2").innerText = "Romance";
        document.getElementById("genero-pt3").innerText = "Romance";
        document.getElementById("titulo-pt2").innerText = "Vidas Secas";
        document.getElementById("titulo-pt3").innerText = "Vidas Secas";
        document.getElementById("autor-pt2").innerText = "Graciliano Ramos";
        document.getElementById("autor-pt3").innerText = "Graciliano Ramos";
        document.getElementById("descricao-pt2").innerText = "O livro Vidas Secas, clássico de Graciliano Ramos publicado em 1938, narra a trajetória comovente de uma família de retirantes que luta pela sobrevivência no sertão nordestino. Acompanhados pela fiel cachorra Baleia, o vaqueiro Fabiano, Sinhá Vitória e seus dois filhos atravessam a terra devastada pela seca em busca de trabalho e de uma vida mais digna. Com uma linguagem direta, precisa e desprovida de excessos, a obra denuncia a miséria extrema, a opressão social e a própria desumanização do homem sertanejo, cujas dificuldades de comunicação refletem a crueza do ambiente ao seu redor.";
        document.getElementById("isbn-pt2").innerText = "9788501114785";
        document.getElementById("isbn-pt3").innerText = "9788501114785";
        document.getElementById("editora-pt2").innerText = "Record";
        document.getElementById("editora-pt3").innerText = "Record";
        document.getElementById("paginas-pt2").innerText = "176";
        document.getElementById("paginas-pt3").innerText = "176";
    }

    if (livro == "livro12") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capaocortico.jpeg";
        document.getElementById("genero-pt2").innerText = "Romance";
        document.getElementById("genero-pt2-2").innerText = "Romance";
        document.getElementById("genero-pt3").innerText = "Romance";
        document.getElementById("titulo-pt2").innerText = "O Cortiço";
        document.getElementById("titulo-pt3").innerText = "O Cortiço";
        document.getElementById("autor-pt2").innerText = "Aluísio Azevedo";
        document.getElementById("autor-pt3").innerText = "Aluísio Azevedo";
        document.getElementById("descricao-pt2").innerText = "O Cortiço, obra-prima do Naturalismo brasileiro escrita por Aluísio Azevedo e publicada em 1890, retrata a vida dos moradores de uma habitação coletiva no Rio de Janeiro. O livro expõe a exploração do ambicioso comerciante português João Romão sobre seus inquilinos e a lavadeira Bertoleza, mostrando como o ambiente e o determinismo social moldam e degradam o comportamento humano. O próprio cortiço funciona como um personagem vivo que pulsa, transforma e, muitas vezes, corrompe a moral daqueles que nele vivem.";
        document.getElementById("isbn-pt2").innerText = "9788508158110";
        document.getElementById("isbn-pt3").innerText = "9788508158110";
        document.getElementById("editora-pt2").innerText = "Ática";
        document.getElementById("editora-pt3").innerText = "Ática";
        document.getElementById("paginas-pt2").innerText = "232";
        document.getElementById("paginas-pt3").innerText = "232";
    }

    if (livro == "livro13") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capajorgeamado.jpeg";
        document.getElementById("genero-pt2").innerText = "Romance";
        document.getElementById("genero-pt2-2").innerText = "Romance";
        document.getElementById("genero-pt3").innerText = "Romance";
        document.getElementById("titulo-pt2").innerText = "Capitães da Areia";
        document.getElementById("titulo-pt3").innerText = "Capitães da Areia";
        document.getElementById("autor-pt2").innerText = "Jorge Amado";
        document.getElementById("autor-pt3").innerText = "Jorge Amado";
        document.getElementById("descricao-pt2").innerText = "Capitães da Areia, obra-prima de Jorge Amado publicada em 1937, retrata a vida de um grupo de meninos abandonados que vivem em um trapiche degradado nas praias de Salvador, Bahia. Liderados pelo jovem Pedro Bala, esses garotos sobrevivem por meio de pequenos furtos e golpes, navegando por uma realidade marcada pela extrema pobreza, abandono social e violência urbana. Apesar da crueza de suas rotinas, o livro humaniza essas crianças ao explorar seus sonhos, laços de profunda solidariedade e o amadurecimento precoce, consolidando-se como uma contundente crítica social e um clássico da literatura brasileira.";
        document.getElementById("isbn-pt2").innerText = "9788535914061";
        document.getElementById("isbn-pt3").innerText = "9788535914061";
        document.getElementById("editora-pt2").innerText = "Companhia das Letras";
        document.getElementById("editora-pt3").innerText = "Companhia das Letras";
        document.getElementById("paginas-pt2").innerText = "280";
        document.getElementById("paginas-pt3").innerText = "280";
    }

    if (livro == "livro14") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capaopequenoprincipe.jpeg";
        document.getElementById("genero-pt2").innerText = "Fantasia";
        document.getElementById("genero-pt2-2").innerText = "Fantasia";
        document.getElementById("genero-pt3").innerText = "Fantasia";
        document.getElementById("titulo-pt2").innerText = "O Pequeno Príncipe";
        document.getElementById("titulo-pt3").innerText = "O Pequeno Príncipe";
        document.getElementById("autor-pt2").innerText = "Antoine de Saint-Exupéry";
        document.getElementById("autor-pt3").innerText = "Antoine de Saint-Exupéry";
        document.getElementById("descricao-pt2").innerText = "Escrito por Antoine de Saint-Exupéry, O Pequeno Príncipe é uma fábula poética que narra o encontro entre um piloto de avião perdido no deserto do Saara e um menino misterioso vindo do asteroide B-612. Conforme o garoto compartilha suas viagens por outros planetas — marcados por adultos solitários e cheios de manias —, a história revela uma profunda crítica ao comportamento humano e à perda da imaginação. Ao lado de personagens marcantes como a raposa e a rosa, o livro aborda temas como o amor, a amizade, a solidão e a responsabilidade, imortalizando a célebre lição de que 'o essencial é invisível aos olhos'.";
        document.getElementById("isbn-pt2").innerText = "9788522005230";
        document.getElementById("isbn-pt3").innerText = "9788522005230";
        document.getElementById("editora-pt2").innerText = "Agir";
        document.getElementById("editora-pt3").innerText = "Agir";
        document.getElementById("paginas-pt2").innerText = "96";
        document.getElementById("paginas-pt3").innerText = "96";
    }

    if (livro == "livro15") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capaannyfranck.jpeg";
        document.getElementById("genero-pt2").innerText = "Autobiografia";
        document.getElementById("genero-pt2-2").innerText = "Autobiografia";
        document.getElementById("genero-pt3").innerText = "Autobiografia";
        document.getElementById("titulo-pt2").innerText = "O Diário de Anne Frank";
        document.getElementById("titulo-pt3").innerText = "O Diário de Anne Frank";
        document.getElementById("autor-pt2").innerText = "Anne Frank";
        document.getElementById("autor-pt3").innerText = "Anne Frank";
        document.getElementById("descricao-pt2").innerText = "O Diário de Anne Frank é uma emocionante e dolorosa obra autobiográfica escrita por uma jovem judia durante a Segunda Guerra Mundial. Enquanto se escondia dos nazistas em um anexo secreto em Amsterdã, Anne relata em seu diário o cotidiano do confinamento, seus medos, conflitos familiares e as transformações da adolescência, além de suas reflexões profundas sobre a natureza humana e a esperança em dias melhores. O livro tornou-se um dos relatos mais poderosos e lidos sobre os horrores do Holocausto, eternizando a voz e o espírito resiliente de uma jovem cuja vida foi tragicamente interrompida.";
        document.getElementById("isbn-pt2").innerText = "978-8501044457";
        document.getElementById("isbn-pt3").innerText = "978-8501044457";
        document.getElementById("editora-pt2").innerText = "Record";
        document.getElementById("editora-pt3").innerText = "Record";
        document.getElementById("paginas-pt2").innerText = "352";
        document.getElementById("paginas-pt3").innerText = "352";
    }

    if (livro == "livro16") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capaharrypoter.jpeg";
        document.getElementById("genero-pt2").innerText = "Fantasia";
        document.getElementById("genero-pt2-2").innerText = "Fantasia";
        document.getElementById("genero-pt3").innerText = "Fantasia";
        document.getElementById("titulo-pt2").innerText = "Harry Potter e a Pedra Filosofal";
        document.getElementById("titulo-pt3").innerText = "Harry Potter e a Pedra Filosofal";
        document.getElementById("autor-pt2").innerText = "J. K. Rowling";
        document.getElementById("autor-pt3").innerText = "J. K. Rowling";
        document.getElementById("descricao-pt2").innerText = "acompanha um órfão de 11 anos que descobre ser um bruxo. Criado por tios abusivos, ele é convidado a estudar na Escola de Magia e Bruxaria de Hogwarts, onde faz amizade com Rony Weasley e Hermione Granger. Juntos, os três amigos embarcam em uma grande aventura para impedir que o temido Lord Voldemort roube a Pedra Filosofal e recupere seus poderes.";
        document.getElementById("isbn-pt2").innerText = "9788532530783";
        document.getElementById("isbn-pt3").innerText = "9788532530783";
        document.getElementById("editora-pt2").innerText = "Rocco";
        document.getElementById("editora-pt3").innerText = "Rocco";
        document.getElementById("paginas-pt2").innerText = "264";
        document.getElementById("paginas-pt3").innerText = "264";
    }

    if (livro == "livro17") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capaquartododesejo.jpeg";
        document.getElementById("genero-pt2").innerText = "Autobiográfia";
        document.getElementById("genero-pt2-2").innerText = "Autobiográfia";
        document.getElementById("genero-pt3").innerText = "Autobiográfia";
        document.getElementById("titulo-pt2").innerText = "Quarto de Despejo";
        document.getElementById("titulo-pt3").innerText = "Quarto de Despejo";
        document.getElementById("autor-pt2").innerText = "Carolina Maria de Jesus";
        document.getElementById("autor-pt3").innerText = "Carolina Maria de Jesus";
        document.getElementById("descricao-pt2").innerText = "O livro 'Quarto de Despejo: Diário de uma Favelada', escrito por Carolina Maria de Jesus e publicado em 1960, é o relato real e impactante do cotidiano da autora na favela do Canindé, em São Paulo. Catadora de papel e mãe solo, Carolina utiliza uma linguagem simples, poética e visceral para registrar a luta diária contra a fome, a miséria e a desigualdade social. A obra funciona como um espelho das margens da sociedade, transformando o sofrimento em uma poderosa denúncia humana e política que se tornou um dos maiores clássicos da literatura brasileira.";
        document.getElementById("isbn-pt2").innerText = "9788508171271";
        document.getElementById("isbn-pt3").innerText = "9788508171271";
        document.getElementById("editora-pt2").innerText = "Ática";
        document.getElementById("editora-pt3").innerText = "Ática";
        document.getElementById("paginas-pt2").innerText = "200";
        document.getElementById("paginas-pt3").innerText = "200";
    }
    
    if (livro == "livro18") {
        document.getElementById("capa-livro-pt1").src = "imgs/infolivro/capaahoradaestrela.jpeg";
        document.getElementById("genero-pt2").innerText = "Romance";
        document.getElementById("genero-pt2-2").innerText = "Romance";
        document.getElementById("genero-pt3").innerText = "Romance";
        document.getElementById("titulo-pt2").innerText = "A Hora da Estrela";
        document.getElementById("titulo-pt3").innerText = "A Hora da Estrela";
        document.getElementById("autor-pt2").innerText = "Clarice Lispector";
        document.getElementById("autor-pt3").innerText = "Clarice Lispector";
        document.getElementById("descricao-pt2").innerText = "A Hora da Estrela, último livro publicado em vida por Clarice Lispector em 1977, narra a trágica e invisível história de Macabéa, uma jovem datilógrafa alagoana de dezoito anos que vive de forma precária no Rio de Janeiro. Sob a ótica do narrador fictício Rodrigo S.M., a obra faz uma profunda reflexão sobre a miséria social, a alienação humana e a própria criação literária, revelando a beleza poética e existencial oculta na rotina de uma protagonista desprovida de qualquer vaidade ou autoconsciência.";
        document.getElementById("isbn-pt2").innerText = "9788532508126";
        document.getElementById("isbn-pt3").innerText = "9788532508126";
        document.getElementById("editora-pt2").innerText = "Rocco";
        document.getElementById("editora-pt3").innerText = "Rocco";
        document.getElementById("paginas-pt2").innerText = "88";
        document.getElementById("paginas-pt3").innerText = "88";
    }
}