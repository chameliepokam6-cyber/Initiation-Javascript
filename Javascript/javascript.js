const nom = "Brunelle";
const age = 19
const rien = null;
console.log(typeof null);
console.log(nom);
const message = `Bonjour,je me nomme ${nom}  et je suis agée de ${age} ans`; 
console.log(typeof age);
console.log(typeof nom);
console.log(message);
if(age>=18){
    console.log("Majeur");}
    else{
        console.log("Mineur");
    }

    const note = 16;
    if (note>=16){
        console.log("Très bien")
    }
    else if(note>=14){
        console.log("Bien");
    }
    else if(note>=12){
        console.log("Assez bien");
    }
    else if(note>=10){
        console.log("Passable");
    }
    else{
        console.log("Faible");
    }



const jour = 'dimanche';
switch (jour) {
case 'lundi':
case 'mardi':
case 'jeudi':
case 'vendredi':
console.log('Jour de semaine');
break;
case 'samedi':
case 'dimanche':
console.log('Week-end !');
break;
default:
console.log('Jour inconnu');
}

for(i = 0;i<5;i++){
    console.log("Le nombre numéro",i+1,"est",i+1);
}

let compteur = 0;
while (compteur < 4) {
console.log('Compteur : ' + compteur);
compteur++; 
}

let b = 0;
do {
 console.log("Erreur" + b);
  b++;
} while(b<4);