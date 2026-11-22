# Catatan Kuliah — Tugas P12

Versi anti-banting Catatan Kuliah berbasis P11 (`4a990b4`). Folder `Sebelum/` masih berisi monolit asli; aplikasi P12 ada di `sesudah/`.

## Jalankan

Buka `sesudah/index.html` melalui **Live Server**, atau dari akar repositori jalankan:

```sh
python -m http.server 8000
```

- Aplikasi: <http://localhost:8000/sesudah/>
- Pemeriksa P12: <http://localhost:8000/sesudah/uji/uji-tangguh.html>
- Pemeriksa regresi P11: <http://localhost:8000/sesudah/uji/uji-modul.html>

Jangan buka lewat `file://`. Gunakan profil browser atau port terpisah untuk pengujian: skrip resmi mengosongkan penyimpanan origin sementara lalu memulihkannya setelah uji berakhir.

## Modul dan penyimpanan

- `src/main.js` menghubungkan form, pencarian, delegasi aksi kartu, dan penyegaran UI.
- `src/state.js` menangani tambah, cari, semat, dan hapus tanpa mengakses DOM.
- `src/ui.js` merender kedua daftar dari `src/komponen.js`, plus hitungan dan peringatan penyimpanan.
- `src/storage.js`: `muat()` mengembalikan array objek dengan `judul` bertipe string. Data lama dimigrasikan dari `catatan-kuliah` hanya jika `catatan-kuliah:v1` belum ada. `simpan(data)` mengembalikan `true` jika berhasil menulis ke penyimpanan lokal, dan `false` jika perubahan hanya tersimpan dalam memori halaman. Penyimpanan yang rusak tidak memblokir penambahan catatan baru.

## Atribusi bantuan AI

Arena.ai Agent Mode digunakan untuk membantu implementasi P12, penyusunan dokumentasi, dan otomasi pengujian. Kode P11 dan pemeriksa resmi tetap dikreditkan kepada sumber masing-masing; pemeriksa P12 disalin dari instruksi tugas tanpa perubahan. Tinjau sendiri sebelum mengumpulkan dan cantumkan bantuan ini sesuai aturan integritas mata kuliah.
