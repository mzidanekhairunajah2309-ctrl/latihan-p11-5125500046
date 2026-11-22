import { muat, simpan } from './storage.js';

let catatan = muat();

export function semua() {
  return catatan;
}

export function tambah(judul, mk) {
  let id = Date.now();
  while (catatan.some(c => c.id === id)) id += 1;
  catatan.push({ id, judul: judul, mk: mk, dibuat: new Date().toISOString(), disematkan: false });
  simpan(catatan);
}

export function alihSemat(target) {
  const c = catatan.find(x => x === target || x.id === target);
  if (c) {
    c.disematkan = c.disematkan !== true;
    simpan(catatan);
  }
}

export function hapus(target) {
  catatan = catatan.filter(x => x !== target && x.id !== target);
  simpan(catatan);
}

export function cari(kata) {
  if (!kata) return catatan;
  return catatan.filter(c => c.judul.toLowerCase().includes(kata.toLowerCase()));
}
