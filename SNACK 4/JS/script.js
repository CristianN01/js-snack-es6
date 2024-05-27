const squadreDiCalcio = [
    {
      nome: 'Juventus',
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: 'Milan',
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: 'Inter',
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: 'Roma',
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: 'Napoli',
      puntiFatti: 0,
      falliSubiti: 0
    }
  ];
  
  console.log(squadreDiCalcio);


  const squadreNomi = ['Juventus', 'Milan', 'Inter', 'Roma', 'Napoli'];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const squadreDiCalcioNumbers = squadreNomi.map(nome => ({
  nome: nome,
  puntiFatti: getRandomNumber(0, 100),
  falliSubiti: getRandomNumber(0, 50)
}));

console.log(squadreDiCalcioNumbers);