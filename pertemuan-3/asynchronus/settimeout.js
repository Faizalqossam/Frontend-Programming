/**
 * download : 3 detik
 * verivy : 2 detik
 * noitfy : menampilkan hasil
 */

function download(){

    return new Promise(function (resolve,reject){
        setTimeout(function (){
            resolve("Proses download 3 detik");
        },3000)
    })

}

function verivy(){
    
    return new Promise(function(resolve,reject){
        setTimeout(function (){
            resolve("Proses verivikasi 2 detik");
        },2000)
    })
}

function notivy(){
    console.log("Selesai download");
}

//solusi dengan menggunakan callback
async function main(){
    // download().then(function(hasil){
    //     console.log(hasil);
    //     return verivy();
    // }).then(function(hasil){
    //     console.log(hasil);
    //     notivy()
    // })
    console.log(await download());
    console.log(await verivy());
    notivy();
}

main()