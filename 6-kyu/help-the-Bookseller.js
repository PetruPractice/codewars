const stockList = (listOfArts, listOfCat) => {
    if (!listOfArts.length || !listOfCat.length) {
        return ''
    }

    const bookByCategory = {}

    listOfArts.forEach(el => {
        const [category, amount] = el.split(' ')
        const catCode = category[0]
        booksByCategory[catCode] = (bookByCategory[catCode] || 0) + Number(amount) 
    })
    return listOfCat.map(el => {
        return `(${el} : ${bookByCategory[el] ||0})`
    }).join(' - ')
}