const aula = [
    {
        Id :'213',
        Name :'Giuseppina della Rovere',
        Grades :'78',
    },
    {
        Id :'110',
        Name :'aola Cortellessa',
        Grades :'96',
    },
    {
        Id :'250',
        Name :'Andrea Mantegna',
        Grades :'48',
    },
    {
        Id :'145',
        Name :'Gaia Borromini',
        Grades :'74',
    },
    {
        Id :'196',
        Name :'Luigi Grimaldello',
        Grades :'68',
    },
    {
        Id :'102',
        Name :'Piero della Francesca',
        Grades :'50',
    },
    {
        Id :'120',
        Name :'Francesca da Polenta',
        Grades :'84',
    },
]

const upperAula = aula.map((name) => {
    return name.Name.toUpperCase()
});

console.log (upperAula);