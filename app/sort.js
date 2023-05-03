let btnOrderByPrice = document.getElementById('btnOrderByPrice')
btnOrderByPrice.addEventListener('click', orderBookByPrice)

function orderBookByPrice() {
    let orderedBooks = books.sort((a,b) => a.preco - b.preco)
    showBookOnScream(orderedBooks)
}