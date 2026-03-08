# 🏥 Sistem Survei Kepuasan Pasien - UNS Medical Center

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 📌 Deskripsi Proyek
Proyek ini adalah tugas praktikum mata kuliah Pemrograman Web berupa satu halaman *landing page* interaktif. Web ini difungsikan sebagai wadah pengisian kuesioner untuk mengevaluasi layanan di UNS Medical Center. Dibuat menggunakan HTML, CSS, dan JavaScript murni (Vanilla) tanpa *framework*.

## ✨ Fitur Utama
* **Formulir Evaluasi:** Input nama, kategori pengunjung, dan pertanyaan skala 1-5.
* **Desain Responsif:** Tampilan form dan gambar yang menyesuaikan ukuran layar.
* **Validasi & Feedback:** Pengguna diwajibkan mengisi seluruh form sebelum submit, dan akan menerima *pop-up alert* tanda ulasan berhasil terkirim.

---

## 💻 Penjelasan Kode Program

Sesuai dengan instruksi tugas praktikum, berikut adalah penjelasan untuk masing-masing blok kode yang digunakan dalam pembuatan *website* ini:

### 1. File `index.html`
HTML selalu diawali dengan tag `<!DOCTYPE html>`. Struktur HTML yang benar terdiri dari `<html>`, `<head>`, dan `<body>`.
* `<html>`: berfungsi untuk penanda kode program HTML.
* `<head>`: berfungsi untuk menaruh informasi penting seperti judul website, link ke *stylesheet*, dan *metadata*.
* `<link>`: digunakan untuk menyisipkan file kode CSS eksternal (`style.css`).
* `<body>`: digunakan untuk menampilkan seluruh isi konten halaman website.
* `<header>`: digunakan untuk wadah judul halaman website dan gambar *banner*.
* `<img>`: digunakan untuk memunculkan gambar dengan atribut `src` untuk sumber gambarnya.
* `<section>`: digunakan untuk membagi konten menjadi bagian-bagian yang spesifik.
* `<form>`: digunakan untuk membuat wadah formulir input data.
* `<input type="text">` & `<input type="radio">`: digunakan untuk membuat inputan teks dan pilihan tunggal (skala rating).
* `<ol>` & `<li>`: digunakan untuk membuat daftar pertanyaan kuesioner yang berurutan.
* `<textarea>`: digunakan untuk membuat kotak inputan teks yang lebih panjang.
* `<script>`: digunakan untuk menyisipkan file kode JavaScript eksternal.

### 2. File `style.css`
* `body`: digunakan untuk mengatur dasar *layout*, warna *background*, dan jenis *font* utama.
* `.container`: digunakan untuk membatasi lebar web, memberi *margin* agar di tengah, latar belakang putih, sudut membulat, dan bayangan lembut.
* `object-fit: cover`: digunakan agar gambar *banner* menyesuaikan kotak tanpa terdistorsi.
* `display: flex`: digunakan untuk mensejajarkan elemen tombol *rating* radio secara horizontal agar rapi.
* `resize: vertical`: digunakan pada *textarea* agar pengguna hanya bisa mengubah ukuran kotak secara vertikal.
* `:hover` & `transition`: digunakan untuk memberikan efek perubahan visual (animasi transisi halus) saat kursor *mouse* diarahkan ke atas elemen.

### 3. File `script.js`
* `event.preventDefault()`: digunakan untuk menahan perilaku bawaan *browser* yang otomatis melakukan *refresh* saat form dikirimkan.
* `alert()`: digunakan untuk memunculkan *pop-up* notifikasi di *browser* yang menyatakan ulasan berhasil dikirim.
* `document.getElementById().reset()`: digunakan untuk mengosongkan/mengembalikan form tersebut ke kondisi bersih seperti semula setelah dikirim.

---
*Dibuat untuk memenuhi Tugas Praktikum Pemrograman Web - Sekolah Vokasi UNS*
