


// Higher order function adalah fungsi yg meneriam fugnsi lain sebagai parameter



// forEach looping sederhana
let angka = [1,2,3,4,5];

angka.forEach((item) => {
    console.log("Angka : ", item);
})


// map (mengubah data)
console.log("mengkalikan semua angka 2");
let angkaBaru = angka.map((item) => item * 2);
console.log(angkaBaru);

// filter (menyaring data)
console.log("filter bilangan genap");
let genap = angka.filter((item) => item % 2 === 0);
console.log(genap);

// reduce (mengakumulasi)
let total = angka.reduce((acc, item) => acc + item, 0);
console.log("akumulasi angka");
console.log(total);
