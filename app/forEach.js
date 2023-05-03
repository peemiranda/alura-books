const insertElement = document.getElementById('livros')
const totalElement = document.getElementById('valor_total_livros_disponiveis')

function showBookOnScream(listOfBooks) {
    totalElement.innerHTML = ''
    insertElement.innerHTML = ''
    listOfBooks.forEach(book => {
        let disponibility = book.quantidade > 0 ? 'livro_imagens' : 'livros_imagens indisponivel'
        insertElement.innerHTML += `
        <div class="livro">
        <img class=" ${disponibility}" src="${book.imagem}" alt="${book.alt}" />
        <h2 class="livro__titulo">${book.titulo}</h2>
        <p class="livro__descricao"> ${book.autor}</p>
        <p class="livro__preco" id="preco"> R$${book.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>
      `
    }
    )
}
