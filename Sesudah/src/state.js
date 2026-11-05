import { ambilData, simpanData } from './storage.js';

let catatan = ambilData();

export function semua() {
  return catatan;
}

export function tambah(judul, mk) {
  catatan.push({ id: Date.now(), judul: judul, mk: mk, dibuat: new Date().toISOString(), disematkan: false });
  simpanData(catatan);
}

export function alihSemat(id) {
  const c = catatan.find(x => x.id === id);
  if (c) {
    c.disematkan = !c.disematkan;
    simpanData(catatan);
  }
}

export function hapus(id) {
  catatan = catatan.filter(x => x.id !== id);
  simpanData(catatan);
}

export function cari(kata) {
  if (!kata) return catatan;
  return catatan.filter(c => c.judul.toLowerCase().includes(kata.toLowerCase()));
}