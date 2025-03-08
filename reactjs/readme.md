


## REACT JS


* [1. Apa itu react](#1-apa-itu-react) 
* [2. persiapan : cara menjalankan react](#2-persiapan--cara-menjalankan-react) 
* [3. struktur project react](#3-struktur-project-react) 
* [4. membuat komponen pertama](#4-membuat-komponen-pertama)
* [5. membuat komponen terpisah](#5-membuat-komponen-terpisah)
* [6. props (mengirim data ke komponen)](#6-props-mengirim-data-ke-komponen)
* [7. state (menyimpan dan mengubah data)](#7-state-menyimpan-dan-mengubah-data)
* [8. event handling (menangani klik , input dll)](#8-event-handling-menangani-klik--input-dll)



### 1. apa itu react
    * react js adalah library javascript yg digunakan untuk membangun antarmuka pengguna (UI) yg interaktif dan dinamis

    * komponen based : UI di bagi jadi komponen kecil yg bisa du gunakan ulang
    * virtual DOM : perubahan di UI lebih cepat dan efisien
    *  One way data flow : data mengalir rdari parent ke child , mudah di kontrol


### 2. persiapan : cara menjalankan react
    * ada 2 cara menjalankan react 
        1. tanpa install (CDN - langsung di browser)
        2. dengan install (menggunakan Vite - lebih cepat dan modern)
    
    * create project 
        * npm create vite@latest my-react-app --template react
        * cd my-react-app
        * npm install
        * npm run dev
    

### 3. struktur project react
    * struktur project react
        my-react-app
        *- node_modules/  => library react
        *- public/        => file static (gambar, favicon, dll)
        *- src/           => kode utama react
            *-app.jsx     => komponen utama
            *- main.jsx   => tempat root react
            *- assets/    => folder untuk gambar atau file static lainya
        *- index.html     => halaman utama
        *- package.jso    => daftar dependencies

### 4. membuat komponen pertama
### 5. membuat komponen terpisah
### 6. props (mengirim data ke komponen)
### 7. state (menyimpan dan mengubah data)
### 8. event handling (menangani klik , input dll)