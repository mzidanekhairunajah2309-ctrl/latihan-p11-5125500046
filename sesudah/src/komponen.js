export function KartuCatatan(catatan) {
  const kartu = document.createElement('div');
  kartu.className = 'kartu';
  const mk = document.createElement('small');
  mk.textContent = typeof catatan.mk === 'string' ? catatan.mk : 'Mata kuliah tidak diketahui';
  const judul = document.createElement('h3');
  judul.textContent = catatan.judul;
  const tanggal = document.createElement('small');
  const dibuat = new Date(typeof catatan.dibuat === 'string' ? catatan.dibuat : NaN);
  tanggal.textContent = Number.isNaN(dibuat.getTime()) ? 'Tanggal tidak diketahui' : dibuat.toLocaleDateString('id-ID');
  const aksi = document.createElement('div');
  aksi.className = 'aksi';
  for (const [nama, label] of [['semat', catatan.disematkan === true ? 'Lepas' : 'Sematkan'], ['hapus', 'Hapus']]) {
    const tombol = document.createElement('button');
    tombol.type = 'button';
    tombol.dataset.aksi = nama;
    tombol.textContent = label;
    aksi.append(tombol);
  }
  kartu.append(mk, judul, tanggal, aksi);
  return kartu;
}

export function PesanKosong(pesan) {
  const el = document.createElement('p');
  el.className = 'kosong';
  el.textContent = pesan;
  return el;
}
