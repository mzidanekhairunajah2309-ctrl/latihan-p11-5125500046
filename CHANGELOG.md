# Changelog

Semua perubahan penting Catatan Kuliah dicatat di sini. Format mengikuti [Keep a Changelog 1.1.0](https://keepachangelog.com/id/1.1.0/) dan penomoran mengikuti [Semantic Versioning](https://semver.org/lang/id/).

## [Unreleased]

## [1.2.0] - 2026-11-18

### Added
- `KartuCatatan` dan `PesanKosong` mengembalikan elemen DOM; teks dinamis dirender dengan `textContent`. Kartu dipakai pada daftar Disematkan dan Semua catatan.
- Penyimpanan berversi `catatan-kuliah:v1` dengan validasi dan penyaringan item rusak, cadangan memori, dan peringatan UI saat penyimpanan diblokir atau penuh.
- Migrasi `catatan-kuliah` ke kunci baru; kunci lama dihapus hanya setelah penulisan berhasil.
- Halaman `sesudah/uji/uji-tangguh.html` untuk menjalankan pemeriksa resmi P12 tanpa perubahan pada skrip pemeriksa.

### Changed
- Folder versi modular memakai nama `sesudah/` dan seluruh modul aplikasi berada di `sesudah/src/`.
- Aksi semat dan hapus ditangani oleh satu pendengar klik di container daftar.

## [1.1.0] - 2026-11-05

### Changed
- Memecah kode monolit menjadi ES Modules: `main.js`, `state.js`, `ui.js`, dan `storage.js`.

## [1.0.0] - 2026-11-05

### Added
- Kode monolit awal Catatan Kuliah: tambah, cari, semat, dan hapus catatan.
