import { tambah, alihSemat, hapus, cari } from './state.js';
import { catatanDariTombol, renderUI } from './ui.js';
import { perluPeringatan } from './storage.js';

let kataCari = '';

function perbaruiTampilan() {
  const hasil = cari(kataCari);
  renderUI(hasil, perluPeringatan());
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const judul = document.getElementById('judul').value.trim();
  const mk = document.getElementById('mk').value;
  if (judul === '') return;
  tambah(judul, mk);
  document.getElementById('judul').value = '';
  perbaruiTampilan();
});

document.getElementById('cari').addEventListener('input', (e) => {
  kataCari = e.target.value;
  perbaruiTampilan();
});

// Delegasi event untuk tombol-tombol di dalam kartu catatan
document.getElementById('daftar-catatan').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-aksi]');
  if (!btn) return;

  const aksi = btn.dataset.aksi;
  const catatan = catatanDariTombol(btn);
  if (!catatan) return;

  if (aksi === 'semat') {
    alihSemat(catatan);
    perbaruiTampilan();
  } else if (aksi === 'hapus') {
    // Konfirmasi penghapusan dilakukan di sini, BUKAN di state.js
    if (confirm('Hapus catatan ini?')) {
      hapus(catatan);
      perbaruiTampilan();
    }
  }
});

perbaruiTampilan();
