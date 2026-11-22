export const KUNCI = 'catatan-kuliah:v1';
const KUNCI_LAMA = 'catatan-kuliah';
let cadangan = [];
let terbaca = undefined;
let tertunda = false;
let bermasalah = false;

function catatanSah(data) {
  return Array.isArray(data)
    ? data.filter(item => item && !Array.isArray(item) && typeof item === 'object' && typeof item.judul === 'string')
    : [];
}

function bacaJSON(mentah) {
  try { return JSON.parse(mentah); } catch { return null; }
}

export function muat() {
  try {
    const penyimpanan = globalThis.localStorage;
    const mentah = penyimpanan.getItem(KUNCI);
    bermasalah = false;
    // Bila isi di disk belum berubah, jangan gantikan perubahan yang belum berhasil ditulis.
    if (tertunda && (terbaca === undefined || mentah === terbaca)) return cadangan;
    if (mentah === null) {
      const dataLama = bacaJSON(penyimpanan.getItem(KUNCI_LAMA));
      if (Array.isArray(dataLama)) {
        const bersih = catatanSah(dataLama);
        if (dataLama.length === 0 || bersih.length > 0) {
          terbaca = null;
          // Jangan hapus sumber sebelum salinan baru berhasil ditulis.
          if (simpan(bersih)) {
            try { penyimpanan.removeItem(KUNCI_LAMA); } catch { /* salinan baru tetap aman */ }
          }
          return cadangan;
        }
      }
    }
    terbaca = mentah;
    tertunda = false;
    cadangan = catatanSah(bacaJSON(mentah));
  } catch {
    bermasalah = true;
  }
  return cadangan;
}

export function simpan(data) {
  cadangan = catatanSah(data);
  try {
    const json = JSON.stringify(cadangan);
    globalThis.localStorage.setItem(KUNCI, json);
    terbaca = json;
    tertunda = false;
    bermasalah = false;
    return true;
  } catch {
    tertunda = true;
    bermasalah = true;
    return false;
  }
}

export function perluPeringatan() {
  return tertunda || bermasalah;
}

// Alias untuk kode yang masih memakai nama ekspor P11.
export { muat as ambilData, simpan as simpanData };
