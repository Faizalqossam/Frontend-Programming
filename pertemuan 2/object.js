//membbuat object dengan menggunakan {}
const user = {
    nama:"faiz",
    umur:20,
    alamat:"bekasi"
}
//mengakses nilai object
console.log(user.nama);
console.log(user["umur"]);

//looping dalam object dengan menggunakan for in
for (const key in user){
    console.log(user[key]);
}