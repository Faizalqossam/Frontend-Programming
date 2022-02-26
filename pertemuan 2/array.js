const animals = ["Kucing","Ayam","Anjing","Ikan"]
console.log(animals[0]);

//looping array
for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

//looping dengan for of

for(const animal of animals){
    console.log(animal);
}