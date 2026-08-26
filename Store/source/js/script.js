// MASUKKAN NOMOR WA ANDA DI SINI (Ganti 62 821-84819821 dengan nomor Anda)
const nomorWhatsApp = "6285285655769";

const dropdownUkuran = document.querySelector('.pilih-ukuran-detail');
const teksHarga = document.querySelector('.harga-tampil-detail');
const tombolBeli = document.querySelector('.btn-beli-detail');

if (dropdownUkuran && teksHarga && tombolBeli) {
    // Fungsi 1: Ubah harga di layar saat pembeli memilih ukuran
    dropdownUkuran.addEventListener('change', function() {
        const hargaDipilih = this.value;
        const hargaFormat = new Intl.NumberFormat('id-ID').format(hargaDipilih);
        teksHarga.textContent = "Rp " + hargaFormat;
    });

    // Fungsi 2: Merakit format WhatsApp saat tombol ditekan
    tombolBeli.addEventListener('click', function() {
        const namaParfum = this.getAttribute('data-nama');
        const ukuranTerpilih = dropdownUkuran.options[dropdownUkuran.selectedIndex].getAttribute('data-ukuran');
        const hargaTerpilih = dropdownUkuran.value;
        const hargaFormat = new Intl.NumberFormat('id-ID').format(hargaTerpilih);

        // Format pesan rapi ke WhatsApp
        const pesanTeks = `Halo BlackHoleScent, saya mau pesan decant parfum:%0A%0A📦 *Produk:* ${namaParfum}%0A📏 *Ukuran:* ${ukuranTerpilih}%0A💵 *Total Harga:* Rp ${hargaFormat}%0A%0AApakah stoknya masih ready?`;
        
        // Membuka tab WhatsApp
        const linkWA = `https://wa.me/${nomorWhatsApp}?text=${pesanTeks}`;
        window.open(linkWA, '_blank');
    });
}
