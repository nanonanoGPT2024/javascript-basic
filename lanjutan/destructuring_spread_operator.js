


// destructuring memudahkan kita mengambil nilai dari array atau object 

// array destructuring
let angka = [1,2,3];
let [a,b,c] = angka;


console.log(a,b,c);


// object destructuring 
let orang = {nama : "keti", umur : 25}
let { nama, umur } = orang;
console.log(nama, umur);


//  spread operator
// spread operator digunakan untuk menyalin atau menggabungkan niali array atau object
let angka1 = [1,2,3,4,5];
let angka2 = [...angka1, 4,5,6]; // gabungkan array

console.log("spread operator : ");
console.log("******************");
console.log("menggabungkan nilai array");
console.log(angka2);



console.log("menggabungkan nilai object ");
let obj1 = {nama: "keti"};
let obj2 = { ...obj1, umur: 25};

console.log(obj2);

