function pesquisar() {
    //Obtém a seção HTML onde os resultados serão exibidos
let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (campoPesquisa == "") {
    section.innerHTML = "Nada foi encontrado. Você precisa digiar o nome do(a) atleta ou esporte."
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

// Itera sobre cada lado da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        //Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
        <h2><a href="#" target="_blank"></a>${dado.titulo}</a></h2>
        <p class="descricao-meta"><a href=${dado.redesSociais} target="_blank">${dado.nome}</a> ${dado.descricao}
        <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
        `;
    }
}

if(!resultados) {
    resultados = "Nada foi encontrado."
}

// Atribui os resultados gerados à seção HTML
section.innerHTML = resultados
}


