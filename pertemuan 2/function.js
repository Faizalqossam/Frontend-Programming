//function declaration
function hitungUmur(bod){
    const tahunSekarang = 2022;
    const hasil = tahunSekarang - bod;
    return hasil;
}
console.log(hitungUmur(2002));

//funtion expression adalah fungsi yang di simpan dalam variabel
const hitungAge = function(bod = 2000){ //=> default parameter
    const tahunSekarang = 2022;
    const hasil = tahunSekarang - bod;
    return hasil;
}
console.log(hitungAge(2001));

//arraw function membuat fungsi dengan tanda panah
const itungUmur = (bod) => 2022 - bod;

console.log(itungUmur(2003));
