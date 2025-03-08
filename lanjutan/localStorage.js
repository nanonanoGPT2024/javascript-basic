const {LocalStorage} = require("node-localstorage");


const localstorage = new LocalStorage('./storage');


localstorage.setItem("nama", "keti");

let nama = localstorage.getItem("nama")
console.log(nama);

localstorage.removeItem("nama");


sessionStorage.setItem("nama", "keti");
console.log(sessionStorage.getItem("nama"));
sessionStorage.removeItem("nama");
