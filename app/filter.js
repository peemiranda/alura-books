const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
    const elementBtn = document.getElementById(this.id)
    const category = elementBtn.value
    let filteredBooks = category == 'available' ?
        filterByDisponibility() :
        filterByCategory(category)
    showBookOnScream(filteredBooks)
    if (category == 'available') {
        const totalValue = calculateTotalValue(filteredBooks)
        showTotalAvailable(totalValue)
    }
}

function filterByCategory(category) {
    return books.filter(book => book.categoria == category)
}

function filterByDisponibility() {
    return books.filter(book => book.quantidade > 0)
}

function showTotalAvailable(totalValue){
    totalElement.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
    `
}