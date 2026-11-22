export function renderUI(hasilCatatan) {
  const sematan = document.getElementById('sematan');
  const semua = document.getElementById('semua');
  const info = document.getElementById('info');
  
  sematan.innerHTML = '';
  semua.innerHTML = '';
  let jumlahSemat = 0;

  hasilCatatan.forEach(c => {
    const isSemat = c.disematkan;
    if (isSemat) jumlahSemat++;
    
    // Perhatikan: Tidak ada lagi atribut onclick="..."
    const html = `
      <div class="kartu">
        <small>${c.mk}</small><h3>${c.judul}</h3>
        <small>${new Date(c.dibuat).toLocaleDateString('id-ID')}</small>
        <div class="aksi">
          <button data-aksi="semat" data-id="${c.id}">${isSemat ? 'Lepas' : 'Sematkan'}</button>
          <button data-aksi="hapus" data-id="${c.id}">Hapus</button>
        </div>
      </div>
    `;
    
    if (isSemat) sematan.innerHTML += html;
    semua.innerHTML += html;
  });

  if (jumlahSemat === 0) sematan.innerHTML = '<p class="kosong">Belum ada catatan yang disematkan.</p>';
  if (hasilCatatan.length === 0) semua.innerHTML = '<p class="kosong">Tidak ada catatan.</p>';
  info.textContent = `${hasilCatatan.length} catatan, ${jumlahSemat} disematkan`;
}