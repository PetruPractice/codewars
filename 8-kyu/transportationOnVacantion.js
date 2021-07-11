const rentalCarcost = d => {
    const costPerDay = 40
    const discount = d >= 7 ? 50 : d >= 3 ? 20 : 0
    return d * costPerDay - discount
}