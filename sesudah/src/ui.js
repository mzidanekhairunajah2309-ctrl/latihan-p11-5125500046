import { KartuCatatan, PesanKosong } from './komponen.js';

// Kartu yang sama bisa muncul di dua daftar; keduanya merujuk ke objek catatan yang sama.
const catatanPerKartu = new WeakMap();

export function catatanDariTombol(tombol) {
  return catatanPerKartu.get(tombol.closest('.kartu'));
}

function isiDaftar(id, daftar, pesan) {
  const wadah = document.getElementById(id);
  const fragmen = document.createDocumentFragment();
  for (const catatan of daftar) {
    const kartu = KartuCatatan(catatan);
    catatanPerKartu.set(kartu, catatan);
    fragmen.append(kartu);
  }
  if (!daftar.length) fragmen.append(PesanKosong(pesan));
  wadah.replaceChildren(fragmen);
}

export function renderUI(hasilCatatan, storageBermasalah = false) {
  const sematan = hasilCatatan.filter(c => c.disematkan === true);
  isiDaftar('sematan', sematan, 'Belum ada catatan yang disematkan.');
  isiDaftar('semua', hasilCatatan, 'Tidak ada catatan.');
  document.getElementById('info').textContent = `${hasilCatatan.length} catatan, ${sematan.length} disematkan`;
  const peringatan = document.getElementById('peringatan-storage');
  peringatan.hidden = !storageBermasalah;
  peringatan.textContent = storageBermasalah
    ? 'Penyimpanan lokal tidak tersedia atau penuh. Perubahan hanya tersimpan di memori halaman ini dan dapat hilang saat halaman dimuat ulang.'
    : '';
}
