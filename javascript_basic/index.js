//  pengenalan javascript
console.log("Hello World");
console.log("*************");

// variable dan tipe data

let nama = "keti";
let umur = 25;
const negara = "Indonesia";
let arr = ["apel", "mangga", "nanas"];

console.log("Nama : ", nama);
console.log("Umur : ", umur);
console.log("Negara : ", negara);
console.log("nama buah buaha", arr);
console.log("*************");

// operator dasara
let a = 10;
let b = 24;

console.log("operator dasar");
console.log("**************");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // modulus
console.log(a === b); // perbandingan
console.log("*************");

// percabnagan

console.log("percabangan dengan if else");
console.log("*************");
let nilai = 80;
if (nilai > 80) {
  console.log("Nilai bagus");
} else {
  console.log("Nilai Jelek");
}
console.log("*************");

console.log("percabangan dengan switch case");
console.log("******************************");

let warna = "merah";

switch (warna) {
  case "merah":
    console.log("ini warna merah");
    break;
  case "biru":
    console.log("ini warna biru");
    break;
  case "hijau":
    console.log("ini warna hijau");
    break;
  case "kuning":
    console.log("ini warna kuning");
    break;
  case "hitam":
    console.log("ini warna hitam");
    break;
  default:
    console.log("warna tidak di temukan ");
}

console.log("******************************");


console.log("perulangan dengan for");
console.log("******************************");

for (let index = 0; index < 5; index++) {
    console.log("Angka ke - ", index);
    
}
console.log("******************************");
console.log();
console.log();
console.log();


console.log("perulangan dengan while");
console.log("******************************");
let x = 1;
// while (x <= 5) {
//     console.log("Angka ", x);
// }
console.log("******************************");
console.log();
console.log();
console.log();


console.log("Function");
console.log("******************************");


// function biasa
function sapa(nama) {
    return "Hallo "+ nama + "!";
}

//  arrow function
const sapa1 = (nama) => "Hallo , " + nama + "!";

console.log(sapa("nanonano"));
console.log(sapa1("nanonano"));
console.log("******************************");
console.log();
console.log();
console.log();



