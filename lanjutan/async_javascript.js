

// 1. callback

function prosesData(callback) {
    setTimeout(() => {
        console.log("Data diproses ...");
        callback();
    }, 2000);
}


// 2. rpromise
let janji = new Promise((resolve, reject) => {
    setTimeout(() => {
        let sukses = true;
        if(sukses) resolve("Data Berhasil disimpan");
        else reject ("Gagal Menyimpan data");
    }, 2000);
});

// 3. async await 
function ambilData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Berhasil diambil");
        })
    });
}

// panggll fungsi callback
// prosesData(() => {
//     console.log("proses selesai");
// })


// panggil fungsi promisie
// janji
//     .then((hasil) => console.log(hasil))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("Selesai"));

// panggil fungsi asynx await
async function proses() {
    console.log("Mengambil data..");
    let hasil = await ambilData();
    console.log(hasil);
}

proses();


