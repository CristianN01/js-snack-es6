> SNACK 1
> Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.

> Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

> Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:

    nome del tavolo (tableName),
    nome dell'ospite (guestName),
    posto occupato (place),

> Generiamo e stampiamo in console la lista per i segnaposto.

SNACK 2
> Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...

> 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);

> 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

> 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Buon pomeriggio e buon lavoro !!! 

Questo è l'elenco degli studenti:

Id  Name                Grades
213 Giuseppina della Rovere 78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84


> N.B.
> Questo esercizio deve essere completato entro la mattinata di domani

<!-- SCOMPONIAMO IL PRIMO PROBLEMA IN MICROPROBLEMI -->

1 Creo un array dove inserisco i nomi degli ospiti, il loro tavolo ed il posto occupato da esso.
2 creo un ciclo per filtrare gli invitati in base in base al loro posto.
3 stampo in console la lista con i segna posti.

<!-- SCOMPONIAMO IL SECONDO PROBLEMA IN MICROPROBLEMI -->

1 creo un array di oggetti che rappresenta la mia aula, con tutti gli studenti, con le loro proprieta tra cui l`id, il nome, e i loro voti(grades).
2 traformo la mia array con i nomi in minuscolo in un array con i nomi tutto in maiuscolo.
3 creo un ciclo filter che filtra gli studenti in base ai loro voti( sopra il 70) e li assegna ad un altra lista, poi gli sstudenti che hanno i voti superiori a 70 e l`id sopra il 120.

<!-- =========================================================================================================== -->

SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

<!-- SCOMPONIAMO IL PRIMO PROBLEMA SNACK-3 -->
1 creo un array di oggetti (bici), con le varie proprieta (nome e peso).
2 stampare in console con laiuto di desctructing e template literal le varie bici.

<!-- SCOMPONIAMO IL SECONDO PROBLEMA SNACK 4 -->

1 creo un array di oggetti con dentro le mie squadre di calcio con il loro nome e le loro proprieta.
2 creo una funzione cghe generi per le loro proprieta un numero randomico, selezionando le proprieta(punti fatti, falli subiti.)
3 infine stampo in console con la destrutturazione un nuovo array contenente solo i nomi e i falli subiti.