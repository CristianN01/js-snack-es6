const tavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

tavoloVip.forEach((element, index, array) => {
    console.log( `tableName: Tavolo Vip, guestName: ${element},place: ${index + 1}`);
});