/* Parte do Menu Responsivo */
function abrirmenu(){
    const menu = document.querySelector(".menu");
    menu.style.display = "flex";
}

function fecharmenu(){
    const menu = document.querySelector(".menu");
    menu.style.display = "none";
}
/* Parte do Catalogo/Infolivro */
const livros = {
    Livro1: {
        nome: "Depois Daquela Viagem",
        imagem: "imgs/catalogo/capadepoisdaquelaviagem.jpeg",
        autor: "Valéria Polizzi",
        isbn: "ISBN: 978-8508164295",
        editora: "Editora: Edição Ática",
        paginas: "Páginas: 288",
        genero: "Gênero: Biografia"
    },
    Livro2: {
        nome: "Eu sou Malala",
        imagem: "imgs/catalogo/capamalala.jpeg",
        autor: "Malala Yousafzai",
        isbn: "ISBN: 978-8535923438",
        editora: "Editora: Edição Companhia das Letras",
        paginas: "Páginas: 360",
        genero: "Gênero: Biografia, Autobiografia"
    },  
    Livro3: {
        nome: "Memórias Póstumas de Brás Cubas",
        imagem: "imgs/catalogo/capamemoriasposturasdebrascubas.jpeg",
        autor: "Machado de Assis",
        isbn: "ISBN: 978-8582850015",
        editora: "Editora: Edição Penguin/Companhia das Letras",
        paginas: "Páginas: 368",
        genero: "Gênero: Romance e Ficção"
    },
    Livro4: {
        nome: "Lucíola",
        imagem: "imgs/catalogo/capaluciola.jpeg",
        autor: "José de Alencar",
        isbn: "ISBN: 978-8508126996",
        editora: "Editora: Edição Ática",
        paginas: "Páginas: 144 Páginas",
        genero: "Gênero: Ficção"
    },
    Livro5: {
        nome: "Iracema",
        imagem: "imgs/catalogo/capairacema.jpeg",
        autor: "José de Alencar",
        isbn: "ISBN: 978-8582850336",
        editora: "Editora: Edição Penguin/Companhia das Letras",
        paginas: "Páginas: 200",
        genero: "Gênero: Ficção"
    },
    Livro6: {
        nome: "Bíblia Linux",
        imagem: "imgs/catalogo/capalinuxbiblia.jpeg",
        autor: "Christopher Negus",
        isbn: "ISBN: 978-8576087991",
        editora: "Editora: Alta Books",
        paginas: "Páginas: 856",
        genero: "Gênero: Informática e Tecnologia"
    },
    Livro7: {
        nome: "Entendendo Algoritmos",
        imagem: "imgs/catalogo/capaentendendoalgoritmos.jpeg",
        autor: "Aditya Y. Bhargava",
        isbn: "ISBN: 978-8575226629",
        editora: "Editora: Novatec Editora",
        paginas: "Páginas: 264",
        genero: "Gênero: Informática e Tecnologia"
    },
    Livro8: {
        nome: "Java para Leigos",
        imagem: "imgs/catalogo/capajavaparaleigos.jpeg",
        autor: "Barry A. Burd",
        isbn: "ISBN: 978-8576088011",
        editora: "Editora: AltaBooks",
        paginas: "Páginas: 424",
        genero: "Gênero: Informática e Tecnologia"
    }
};

const params = new URLSearchParams(window.location.search);
const tipoLivro = params.get("item");
const livro = livros[tipoLivro];

if (livro) {
    const imagem=document.getElementById("capa");
    const nome=document.getElementById("nome");
    const autor=document.getElementById("autor");
    const isbn=document.getElementById("isbn");
    const editora=document.getElementById("editora");
    const paginas=document.getElementById("paginas");
    const genero=document.getElementById("genero");

    if (imagem) {
        imagem.src=livro.imagem;
        imagem.alt=livro.nome;
    }

    if (nome) {
        nome.textContent=livro.nome;
    }

    if (autor) {
        autor.textContent=livro.autor;
    }

    if (isbn) {
        isbn.textContent=livro.isbn;
    }

    if (editora) {
        editora.textContent=livro.editora;
    }

    if (paginas) {
        paginas.textContent=livro.paginas;
    }

    if (genero) {
        genero.textContent=livro.genero;
    }
    document.title=livro.nome;
}

/* Filtros: (Categorias) */

function filtroLivros(typefiltro) {
    const cards = document.querySelectorAll(".card-livro");
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