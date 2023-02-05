const prompt = require('prompt-sync')({sigint: true});

const nilai = prompt('Masukan nilai: ');
var grade;

if (nilai%2==0){
    grade = "Angka adalah bilangan genap"
} else if (nilai<0){
    grade = "Tidak bisa input bilangan negatif"
} else if (nilai%1==0){
    grade = "Angka adalah bilangan ganjil"
}


console.log("Grade adalah = " + grade)