let books = []

const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getCatchBookFromAPI()


async function getCatchBookFromAPI() {
    const ans = await fetch(endpoint)
    books = await ans.json()
    let booksDiscount = applyDiscount(books)
    showBookOnScream(booksDiscount)
}


