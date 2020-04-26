function priceComma(num) {
    let strNum = num.toString();
    const regex = /\d/ig;
    let eachIndex = strNum.match(regex);
    const remainder = eachIndex.length % 3;
    for(let i = eachIndex.length; i > 0; i--) {
        if(i % 3 === remainder && i !== eachIndex.length) {
            eachIndex.splice(i, 0, ',');
        }
    }
    let priceReturn = '';
    eachIndex.forEach(index => {
        priceReturn += index;
    });
    return priceReturn;
}

export default priceComma;