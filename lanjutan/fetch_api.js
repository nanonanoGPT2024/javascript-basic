


// fetch api digunakan untuk mengabil data dari server menggunakan HTTP request


// contoh menggunakan fect api 
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.log("Terjadi Kesalahan"))


// contoh menggunakan async / await 
async function getData() {
    try {
        let response  = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Gagal mengambil data ", error);
    }
}


getData();
