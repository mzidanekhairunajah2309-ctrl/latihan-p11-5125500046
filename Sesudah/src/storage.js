export function ambilData() {
  return JSON.parse(localStorage.getItem('catatan-kuliah')) || [];
}

export function simpanData(data) {
  localStorage.setItem('catatan-kuliah', JSON.stringify(data));
}